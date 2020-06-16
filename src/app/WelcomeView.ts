import {IWelcomeView} from 'ordino';

import WelcomeViewTemplate from '../welcome_view.html';

export class WelcomeView implements IWelcomeView {

  constructor(private parent: HTMLElement) {
    //
  }

  build() {
    this.parent.insertAdjacentHTML('afterbegin', WelcomeViewTemplate);
  }
}
