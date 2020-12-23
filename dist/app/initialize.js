/********************************************************************
 * Copyright (c) The Caleydo Team, http://caleydo.org
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ********************************************************************/
import 'ordino/dist/templates/404.html';
import 'ordino/dist/robots.txt';
import * as aboutDisclaimer from '../templates/_aboutDisclaimer.html';
import { Ordino } from 'ordino';
import { AppMetaDataUtils } from 'phovea_ui';
const _ = new Ordino({
    showCookieDisclaimer: true,
    showResearchDisclaimer: false,
    showAboutLink
});
function showAboutLink(title, content) {
    title.innerHTML = 'Ordino';
    // insert Ordino Public about disclaimer
    const caleydoInfo = content.querySelector(`.caleydoInfo p`);
    content.innerHTML = `<article class="about-disclaimer">${aboutDisclaimer}</article>`;
    // move the information about caleydo to the source code section and remove the rest of the info
    document.getElementById('about-source-code').insertAdjacentElement('beforeend', caleydoInfo);
    AppMetaDataUtils.getMetaData().then((metaData) => {
        document.getElementById('about-source-code').insertAdjacentHTML('beforeend', `<p class="version"><strong>Version</strong>: ${metaData.version}</p>`);
    });
}
//# sourceMappingURL=initialize.js.map