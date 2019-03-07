import {on} from 'phovea_core/src/event';
import {GLOBAL_EVENT_USER_LOGGED_IN, IUser, GLOBAL_EVENT_USER_LOGGED_OUT} from 'phovea_core/src/security';
import Ordino from 'ordino/src/Ordino';
import {SESSION_KEY_NEW_ENTRY_POINT} from 'ordino/src/internal/constants';
import * as session from 'phovea_core/src/session';
import {ProvenanceGraph, ActionNode} from 'phovea_core/src/provenance';
import {getAPIJSON} from 'phovea_core/src/ajax';


// assume already declared
(<any>window)._pag = (<any>window)._paq || [];
declare const _paq: any[][];

const matomo = {
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
    // _paq.push(['requireConsent']); TODO user consent form with opt out
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
    matomo.trackEvent('executeAction', node.name, JSON.stringify(node.parameter));
  });
  graph.on('run_chain', (_, nodes: ActionNode[]) => {
    matomo.trackEvent('runChain', nodes.map((d) => d.name).join('->'), nodes.map((d) => JSON.stringify(d.parameter)).join('->'));
  });
}

function loadMamoto(): Promise<boolean> {
  return getAPIJSON('/tdp/config/matomo').then((config: {url?: string, site: string}) => {
    if (!config.url) {
      return false;
    }
    _paq.push(['setTrackerUrl', `${config.url}piwik.php`]);
    _paq.push(['setSiteId', config.site]);

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.defer = true;
    s.src = `${config.url}piwik.js`;
    const base = document.getElementsByTagName('script')[0];
    base.insertAdjacentElement('beforebegin', s);
    return true;
  });
}

export default function trackApp(ordino: Ordino) {
  ordino.on(Ordino.EVENT_OPEN_START_MENU, () => matomo.trackEvent('startMenu', 'open'));

  const sessionInit: {view: string, options: any} = <any>session.retrieve(SESSION_KEY_NEW_ENTRY_POINT);

  on(GLOBAL_EVENT_USER_LOGGED_IN, (_, user: IUser) => {
    matomo.login(user.name);
    ordino.graph.then((graph) => {
      if (graph.isEmpty && !sessionInit) {
        matomo.trackEvent('initSession', 'new');
      } else if (sessionInit) {
        matomo.trackEvent('initSession', `init ${sessionInit.view}`, JSON.stringify(sessionInit.options));
      } else {
        matomo.trackEvent('initSession', `continue`, `${graph.desc.id} at state ${ordino.clueManager.storedState || Math.max(...graph.states.map((s) => s.id))}`);
      }

      trackGraph(graph);
    });
  });

  on(GLOBAL_EVENT_USER_LOGGED_OUT, () => {
    matomo.logout();
  });

  return loadMamoto();
}
