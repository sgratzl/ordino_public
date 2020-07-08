import {IWelcomeView} from 'ordino/src/WelcomeView';

import WelcomeViewTemplate from 'html-loader!./welcome_view.html';

export default class WelcomeView implements IWelcomeView {

  constructor(private parent: HTMLElement) {
    //
  }

  build() {
    this.parent.insertAdjacentHTML('afterbegin', WelcomeViewTemplate);

    // add message to ordino public - temporary change
    const template = `
    <div class="alert alert-warning" style="max-width: fit-content;" role="alert">
      <strong>Please note:</strong> We have upgraded Ordino to the hg38 genome build, which might change the result of some old sessions.
      If you experience some issues please open previous sessions in the <a href="https://ordino-hg19.caleydoapp.org">Ordino with hg19</a>.
    </div>`;

    const persitedSessionsNode = document.querySelector('.tdpSessionPersistentData .item');
    persitedSessionsNode.insertAdjacentHTML('afterbegin', template);
  }
}
