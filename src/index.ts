/**
 * Created by Samuel Gratzl on 16.12.2015
 */

// Determine the order of css files manually

import 'file-loader?name=index.html!extract-loader!html-loader?interpolate!ordino/src/index.html';
import 'file-loader?name=404.html!ordino/src/404.html';
import 'file-loader?name=robots.txt!ordino/src/robots.txt';
import 'phovea_ui/src/_bootstrap';
import 'phovea_ui/src/_font-awesome';
import 'ordino/src/style.scss';
import * as loginForm from 'html-loader!./_loginForm.html';
import Ordino from 'ordino/src/Ordino';


import * as DockerName from 'docker-names';
import {randomId} from 'phovea_core/src';

new Ordino({
  loginForm: String(loginForm)
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
