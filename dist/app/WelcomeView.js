import WelcomeViewTemplate from '../templates/welcome_view.html';
import { Dialog } from 'phovea_ui';
import { SESSION_KEY_NEW_ENTRY_POINT } from 'ordino';
import { UserSession } from 'phovea_core';
export class WelcomeView {
    constructor(parent) {
        this.parent = parent;
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
    createMigrationMessage(parentNode) {
        let warningMessage = parentNode.querySelector('div.alert-warning');
        if (warningMessage) {
            return;
        }
        const sessionsTable = parentNode.childNodes[1];
        warningMessage = document.createElement('div');
        warningMessage.className = 'alert alert-warning';
        warningMessage.setAttribute('role', 'alert');
        warningMessage.style.maxWidth = 'fit-content';
        warningMessage.innerHTML = `
      <strong>Please note:</strong> We have upgraded Ordino to the hg38 genome build, which might change the result of some old sessions.<br>
      If you experience some issues please open previous sessions in the <a href="https://ordino-hg19.caleydoapp.org">Ordino with hg19</a>.`;
        parentNode.insertBefore(warningMessage, sessionsTable);
    }
}
/**
 * Show a migration popup for Ordino hg38 instance.
 * The dialog can be dismissed and should not open again.
 * The dialog should also not open, if the user has already
 * selected an entry point or session from the start menu.
 *
 * Temporary feature will be removed eventually.
 *
 * @param graph Provenance graph
 */
export function dismissMigrationPopup(graph) {
    const DISMISS_POPUP_SESSION_KEY = 'ordino_dismiss_migration_popup';
    // 1) dismissed flag is active == do not show the popup
    if (localStorage.getItem(DISMISS_POPUP_SESSION_KEY) !== null && JSON.parse(localStorage.getItem(DISMISS_POPUP_SESSION_KEY)) === true) {
        return;
        // 2) do not show the popup if there is a new graph or session; inspired by `Ordino.initSessionImpl()`
    }
    else if (!graph.isEmpty || UserSession.getInstance().has(SESSION_KEY_NEW_ENTRY_POINT)) {
        return;
    }
    const dialog = Dialog.generateDialog('Ordino just got better!');
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
        localStorage.setItem(DISMISS_POPUP_SESSION_KEY, JSON.stringify(dismissCheckbox.checked));
    });
    dialog.show();
}
//# sourceMappingURL=WelcomeView.js.map