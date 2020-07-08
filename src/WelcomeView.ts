import {IWelcomeView} from 'ordino/src/WelcomeView';

import WelcomeViewTemplate from 'html-loader!./welcome_view.html';

export default class WelcomeView implements IWelcomeView {

  constructor(private parent: HTMLElement) {
    //
  }

  build() {
    this.parent.insertAdjacentHTML('afterbegin', WelcomeViewTemplate);

    const dataToggleElement = document.getElementById('tdpSessionPersistentDataToggle');
    const parentNode = document.querySelector('.tdpSessionPersistentData .body');
    dataToggleElement.addEventListener('click', (evt) => {
      this.createMigrationMessage(parentNode);
    });
  }

/**
 * Create migration message to add to the persisstent sessions section. Temporary feature will be removed eventually.
 */
  createMigrationMessage(parentNode: Element) {
    let warningMessage = parentNode.querySelector('div.alert-warning');
    if (warningMessage) {
      return;
    }

    const sessionsTable = parentNode.childNodes[1];
    warningMessage = document.createElement('div');
    warningMessage.className = 'alert alert-warning';
    warningMessage.setAttribute('role', 'alert');
    (warningMessage as HTMLDivElement).style.maxWidth = 'fit-content';
    warningMessage.innerHTML = `
      <strong>Please note:</strong> We have upgraded Ordino to the hg38 genome build, which might change the result of some old sessions.
      If you experience some issues please open previous sessions in the <a href="https://ordino-hg19.caleydoapp.org">Ordino with hg19</a>.`;

    parentNode.insertBefore(warningMessage, sessionsTable);
  }
}
