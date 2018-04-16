import {IWelcomeView} from 'ordino/src/WelcomeView';

import WelcomeViewTemplate from 'html-loader!./welcome_view.html';

export default class WelcomeView implements IWelcomeView {

  constructor(private parent: HTMLElement) {
    //
  }

  build() {
    this.parent.innerHTML = WelcomeViewTemplate;
  }
}
