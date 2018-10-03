import {on} from 'phovea_core/src/event';
import {GLOBAL_EVENT_USER_LOGGED_IN, IUser, GLOBAL_EVENT_USER_LOGGED_OUT} from 'phovea_core/src/security';


const cmds: any[][] = (<any>window)._paq = (<any>window)._paq || [];

/* tracker methods like "setCustomDimension" should be called before "trackPageView" */


on(GLOBAL_EVENT_USER_LOGGED_IN, (_, user: IUser) => {
  cmds.push(['setUserId', user.name]);

  cmds.push(['trackPageView']);
  cmds.push(['enableLinkTracking']);
  // enable correct measuring of the site since it is a single page site
  cmds.push(['enableHeartBeatTimer']);
});

on(GLOBAL_EVENT_USER_LOGGED_OUT, () => {
  cmds.push(['resetUserId']);
  cmds.push(['trackPageView']);
});
