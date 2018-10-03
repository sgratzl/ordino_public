import {on} from 'phovea_core/src/event';
import {GLOBAL_EVENT_USER_LOGGED_IN, IUser, GLOBAL_EVENT_USER_LOGGED_OUT} from 'phovea_core/src/security';
import Ordino from 'ordino/src/Ordino';
import {SESSION_KEY_NEW_ENTRY_POINT} from 'ordino/src/internal/constants';
import * as session from 'phovea_core/src/session';
import {ProvenanceGraph, ActionNode} from 'phovea_core/src/provenance';


// assume already declared
declare const _paq: any[][];

const mamoto = {
  trackEvent(category: string, action: string, name?: string, value?: number) {
    const t: any[] = ['trackEvent', category, action];
    if (typeof name === 'string') {
      t.push(name);
    }
    if (typeof value === 'number') {
      t.push(value);
    }
    _paq.push(t);
  },
  login(user: string) {
    _paq.push(['setUserId', user]);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    // enable correct measuring of the site since it is a single page site
    _paq.push(['enableHeartBeatTimer']);
  },
  logout() {
    _paq.push(['resetUserId']);
    _paq.push(['trackPageView']);
  }
};

function trackGraph(graph: ProvenanceGraph) {
  graph.on('execute', (_, node: ActionNode) => {
    mamoto.trackEvent('executeAction', node.name, JSON.stringify(node.parameter));
  });
  graph.on('run_chain', (_, nodes: ActionNode[]) => {
    mamoto.trackEvent('runChain', nodes.map((d) => d.name).join('->'), nodes.map((d) => JSON.stringify(d.parameter)).join('->'));
  });
}

export default function trackApp(ordino: Ordino) {
  ordino.on(Ordino.EVENT_OPEN_START_MENU, () => mamoto.trackEvent('startMenu', 'open'));

  const sessionInit: {view: string, options: any} = <any>session.retrieve(SESSION_KEY_NEW_ENTRY_POINT);

  on(GLOBAL_EVENT_USER_LOGGED_IN, (_, user: IUser) => {
    mamoto.login(user.name);
    ordino.graph.then((graph) => {
      if (graph.isEmpty && !sessionInit) {
        mamoto.trackEvent('initSession', 'new');
      } else if (sessionInit) {
        mamoto.trackEvent('initSession', `init ${sessionInit.view}`, JSON.stringify(sessionInit.options));
      } else {
        mamoto.trackEvent('initSession', `continue`, `${graph.desc.id} at state ${ordino.clueManager.storedState || Math.max(...graph.states.map((s) => s.id))}`);
      }

      trackGraph(graph);
    });
  });

  on(GLOBAL_EVENT_USER_LOGGED_OUT, () => {
    mamoto.logout();
  });
}
