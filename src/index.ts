/**
 * Created by Samuel Gratzl on 16.12.2015
 */

// Determine the order of css files manually

import 'file-loader?name=index.html!extract-loader!html-loader?interpolate!ordino/src/index.html';
import 'file-loader?name=404.html!ordino/src/404.html';
import 'file-loader?name=robots.txt!ordino/src/robots.txt';
import 'ordino/src/style.scss';
import * as loginForm from 'html-loader!./_loginForm.html';
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
    setTimeout(injectDisclaimer, 2000, selector); //wait another 2s
    return;
  }
  alert.innerHTML = `<strong>Disclaimer:</strong> This software is <strong>for research purpose and non-commercial use only</strong>.`;
}
setTimeout(injectDisclaimer, 2000, '#headerAboutDialog .modal-body .alert');
setTimeout(injectDisclaimer, 10, '.welcomeView .disclaimer .alert');

function closeStartMenu() {
  const menu = <HTMLElement>document.querySelector('.startMenu');
  if(!menu) {
    setTimeout(closeStartMenu, 10); //wait another 2s
    return;
  }
  menu.classList.remove('open');
}
setTimeout(closeStartMenu, 10);
