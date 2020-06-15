import {IWelcomeView} from 'ordino';

import WelcomeViewTemplate from 'html-loader!./templates/welcome_view.html';

export class WelcomeView implements IWelcomeView {

  constructor(private parent: HTMLElement) {
    //
  }

  build() {
    this.parent.insertAdjacentHTML('afterbegin', WelcomeViewTemplate);
  }
}
