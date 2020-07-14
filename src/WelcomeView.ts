import {IWelcomeView} from 'ordino/src/WelcomeView';

import WelcomeViewTemplate from 'html-loader!./welcome_view.html';
import {generateDialog} from 'phovea_ui/src/dialogs';
import * as session from 'phovea_core/src/session';

export default class WelcomeView implements IWelcomeView {

  private static DISMISS_POPUP_SESSION_KEY = 'OrdinoDismissMigrationPopup';

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

    this.showMigrationPopup();
  }

  /**
   * Create migration message to add to the persisstent sessions section. Temporary feature will be removed eventually.
   */
  private createMigrationMessage(parentNode: Element) {
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
      <strong>Please note:</strong> We have upgraded Ordino to the hg38 genome build, which might change the result of some old sessions.<br>
      If you experience some issues please open previous sessions in the <a href="https://ordino-hg19.caleydoapp.org">Ordino with hg19</a>.`;

    parentNode.insertBefore(warningMessage, sessionsTable);
  }

  private showMigrationPopup() {
    // dismissed flag is active == do not show the popup
    if(session.has(WelcomeView.DISMISS_POPUP_SESSION_KEY) && session.retrieve(WelcomeView.DISMISS_POPUP_SESSION_KEY) === true) {
      return;
    }

    const dialog = generateDialog('Ordino just got better!');

    dialog.body.innerHTML = `
    We have updated the data in Ordino from genome build hg19 to build hg38.
    Additionally we also extended the available data.
    As a consequence of these changes, analysis results can differ slightly compared to the previous Ordino version.
    If necessary, you can still access the original hg19 instance here: <a href="https://ordino-hg19.caleydoapp.org">ordino-hg19.caleydoapp.org</a>`;

    dialog.footer.innerHTML = `
      <div class="row">
        <div class="col-md-6" style="text-align: left;">
          <label><input type="checkbox" name="dismiss"> Do not show this again</label>
        </div>
        <div class="col-md-6">
          <button type="button" class="btn btn-default btn-primary submit-dialog">Close</button>
        </div>
      </div>
    `;

    dialog.footer.querySelector('button').onclick = () => {
      dialog.hide();
    };

    const dismissCheckbox = dialog.footer.querySelector('input');

    dialog.onHide(() => {
      session.store(WelcomeView.DISMISS_POPUP_SESSION_KEY, dismissCheckbox.checked);
    });

    dialog.show();
  }
}
