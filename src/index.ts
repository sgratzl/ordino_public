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
import 'ordino/src/style.scss';
import * as loginForm from 'html-loader!./_loginForm.html';
import * as aboutDisclaimer from 'html-loader!./_aboutDisclaimer.html';
import Ordino from 'ordino/src/Ordino';
import './style.scss';

import * as DockerName from 'docker-names';
import {randomId} from 'phovea_core/src';

new Ordino({
  loginForm: String(loginForm),
  showCookieDisclaimer: true
});

{
  // generate random username
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)randomCredentials\s*=\s*([^;]*).*$)|^.*$/, '$1');

  let username = DockerName.getRandomName();
  let password = randomId(6);
  if (cookieValue) {
    // restore old value
    [username, password] = cookieValue.split('@');
  }
  // store for next time
  const maxAge = 2 * 7 * 24 * 60 * 60; // 2 weeks in seconds
  document.cookie = `randomCredentials=${username}@${password};max-age=${maxAge}`;

  (<HTMLInputElement>document.querySelector('input#login_username')).value = username;
  (<HTMLInputElement>document.querySelector('input#login_password')).value = password;
}

function injectDisclaimer(selector) {
  const alert = <HTMLElement>document.querySelector(selector);
  if (!alert) {
    setTimeout(injectDisclaimer, 1000, selector); //wait another second
    return;
  }
  alert.innerHTML = `<strong>Disclaimer:</strong> This software is <strong>for research purpose and non-commercial use only</strong>.`;
}

setTimeout(injectDisclaimer, 100, '.welcomeView .disclaimer .alert');


// remove disclaimer alert from about dialog
document.querySelector('#headerAboutDialog .modal-body .alert').remove();

// insert Ordino Public about disclaimer
const metaData = document.querySelector(`#headerAboutDialog .modal-body .metaData`);
metaData.insertAdjacentHTML('beforebegin', `<article class="about-disclaimer">${aboutDisclaimer}</article>`);

// move the information about caleydo to the source code section and remove the rest of the info
const caleydoInfo = document.querySelector(`#headerAboutDialog .modal-body .caleydoInfo`);
document.getElementById('about-source-code').insertAdjacentElement('beforeend', caleydoInfo.querySelector('p'));
caleydoInfo.remove();


/**
 * Create a MutationObserver that checks for childList modifications
 * @param selector
 * @param {(mutation: MutationRecord, observer: MutationObserver) => void} callback
 */
function createMutationObserver(selector, callback: (mutation: MutationRecord, observer: MutationObserver) => void) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        callback(mutation, observer);
      }
    }
  });
  observer.observe(document.querySelector(selector), {childList: true});
}


/**
 * wait until the metadata is loaded, then move the version number remove the rest of the metadata
 * @param {MutationRecord} mutation
 * @param {MutationObserver} observer
 */
function moveMetaDataVersion(mutation: MutationRecord, observer: MutationObserver) {
  observer.disconnect(); // stop listening
  const target = <HTMLElement>mutation.target;
  document.getElementById('about-source-code').insertAdjacentElement('beforeend', target.querySelector('.version'));
  target.remove();
}

createMutationObserver(`#headerAboutDialog .modal-body .metaData`, moveMetaDataVersion);


/**
 * Change about dialog title to `Ordino` (instead of `Ordino Public`)
 * @param {MutationRecord} mutation
 * @param {MutationObserver} observer
 */
function modifyDialogTitle(mutation: MutationRecord, observer: MutationObserver) {
  observer.disconnect(); // stop listening
  if (mutation.target.textContent !== 'Ordino') {
    mutation.target.textContent = 'Ordino';
  }
}

createMutationObserver(`#headerAboutDialog .modal-title`, modifyDialogTitle);

