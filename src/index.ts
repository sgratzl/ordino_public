/**
 * Created by Samuel Gratzl on 16.12.2015
 */

// Determine the order of css files manually

import 'file-loader?name=index.html!extract-loader!html-loader!ordino/src/index.html';
import 'file-loader?name=404.html!ordino/src/404.html';
import 'file-loader?name=robots.txt!ordino/src/robots.txt';
import 'phovea_ui/src/_bootstrap';
import 'phovea_ui/src/_font-awesome';
import 'ordino/src/style.scss';
import * as loginForm from 'html-loader!./_loginForm.html';

import * as template from 'phovea_clue/src/template';
import * as header from 'phovea_ui/src/header';
import {create} from 'ordino/src/Targid';
import * as DockerName from 'docker-names';
import {randomId} from 'phovea_core/src';

// cache the nodes from the ordino/index.html before the TargID app is created
// NOTE: the template (see next line) replaces the content of the document.body (but not document.head)
const appNode = document.getElementById('app');
const extrasNode = document.getElementById('extras');

// cache targid instance for logo app link
let ordino;

// create TargID app from CLUE template
const elems = template.create(document.body, {
  app: 'Ordino',
  appLink: new header.AppHeaderLink('Ordino', (event) => {
    event.preventDefault();
    ordino.openStartMenu();
    return false;
  }),
  application: 'Ordino',
  id: 'ordino',
  recordSelectionTypes: null, // no automatic selection recording
  provVisCollapsed: true,
  thumbnails: false,
  headerOptions: {
    showReportBugLink: true
  },
  loginForm: String(loginForm)
});

{
  // generate random username
  const username = DockerName.getRandomName();
  const password = username + randomId(4);
  (<HTMLInputElement>document.querySelector('input#login_username')).value = username;
  (<HTMLInputElement>document.querySelector('input#login_password')).value = password;
}

const aboutDialogBody = elems.header.aboutDialog;
aboutDialogBody.insertAdjacentHTML('afterbegin', '<div class="alert alert-warning" role="alert"><strong>Disclaimer</strong> This software is <strong>for research purpose only</strong>.</span></div>');


// copy nodes from original document to new document (template)
const mainNode = <HTMLElement>elems.$main.node();
mainNode.classList.add('targid');
while (appNode.firstChild) {
  mainNode.appendChild(appNode.firstChild);
}
while (extrasNode.firstChild) {
  document.body.appendChild(extrasNode.firstChild);
}

// create TargID app once the provenance graph is available
elems.graph.then((graph) => {
  ordino = create(graph, elems.clueManager, mainNode, elems);
});
