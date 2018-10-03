import {on} from 'phovea_core/src/event';
import {GLOBAL_EVENT_USER_LOGGED_IN, IUser, GLOBAL_EVENT_USER_LOGGED_OUT} from 'phovea_core/src/security';
import Ordino from 'ordino/src/Ordino';
import {SESSION_KEY_NEW_ENTRY_POINT} from 'ordino/src/internal/constants';
import * as session from 'phovea_core/src/session';
import {ProvenanceGraph, ActionNode} from 'phovea_core/src/provenance';


const cmds: any[][] = (<any>window)._paq = (<any>window)._paq || [];

const mamoto = {
  trackEvent(category: string, action: string) {
    cmds.push(['trackEvent', category, action]);
  },
  login(user: string) {
    cmds.push(['setUserId', user]);
    cmds.push(['trackPageView']);
    cmds.push(['enableLinkTracking']);
    // enable correct measuring of the site since it is a single page site
    cmds.push(['enableHeartBeatTimer']);
  },
  logout() {
    cmds.push(['resetUserId']);
    cmds.push(['trackPageView']);
  }
};

function trackGraph(graph: ProvenanceGraph) {
  graph.on('execute', (_, node: ActionNode) => {
    mamoto.trackEvent('executeAction', `${node.name}: ${JSON.stringify(node.parameter)}`);
  });
  graph.on('run_chain', (_, nodes: ActionNode[]) => {
    mamoto.trackEvent('runChain', nodes.map((d) => `${d.name}: ${JSON.stringify(d.parameter)}`).join('->'));
  });
}

export default function trackApp(ordino: Ordino) {
  ordino.on(Ordino.EVENT_OPEN_START_MENU, () => mamoto.trackEvent('StartMenu', 'open'));

  const sessionInit: {view: string, options: any} = <any>session.retrieve(SESSION_KEY_NEW_ENTRY_POINT);

  on(GLOBAL_EVENT_USER_LOGGED_IN, (_, user: IUser) => {
    mamoto.login(user.name);
    ordino.graph.then((graph) => {
      if (graph.isEmpty && !sessionInit) {
        mamoto.trackEvent('initSession', 'new');
      } else if (sessionInit) {
        mamoto.trackEvent('initSession', `init ${sessionInit.view}: ${JSON.stringify(sessionInit.options)}`);
      } else {
        mamoto.trackEvent('initSession', `continue ${graph.desc.id} at state ${ordino.clueManager.storedState || Math.max(...graph.states.map((s) => s.id))}`);
      }

      trackGraph(graph);
    });
  });

  on(GLOBAL_EVENT_USER_LOGGED_OUT, () => {
    mamoto.logout();
  });
}
