/********************************************************************
 * Copyright (c) The Caleydo Team, http://caleydo.org
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ********************************************************************/
// Determine the order of css files manually
import 'file-loader?name=index.html!extract-loader!html-loader?interpolate!ordino/src/index.html';
import 'file-loader?name=404.html!ordino/src/404.html';
import 'file-loader?name=robots.txt!ordino/src/robots.txt';
import 'ordino/scss/main.scss';
import * as aboutDisclaimer from 'html-loader!./templates/_aboutDisclaimer.html';
import { Ordino } from 'ordino';
import './scss/style.scss';
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