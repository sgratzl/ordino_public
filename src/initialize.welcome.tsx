import 'ordino/dist/templates/404.html';
import 'ordino/dist/robots.txt';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {HomePage, DatasetsPage, FeaturesPage, NewsPage} from './pages';

ReactDOM.render(
  <>
    <HashRouter>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/news">
          <NewsPage />
        </Route>
        <Route path="/features">
          <FeaturesPage />
        </Route>
        <Route path="/datasets">
          <DatasetsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  </>,
  document.querySelector('#welcome')
)
