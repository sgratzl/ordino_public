import 'ordino/dist/robots.txt';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {HomePage, DatasetsPage, FeaturesPage, NewsPage, Error404Page, PublicationPage, HelpPage} from './pages';
import {RouterScrollToTop} from './utils';
import {ToursPage} from './pages/ToursPage';

ReactDOM.render(
  <>
    <HashRouter>
      <RouterScrollToTop></RouterScrollToTop>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/news/:slug">{/* initialize slug version first */}
          <NewsPage />
        </Route>
        <Route path="/news">
          <NewsPage />
        </Route>
        <Route path="/tours">
          <ToursPage />
        </Route>
        <Route path="/features">
          <FeaturesPage />
        </Route>
        <Route path="/datasets">
          <DatasetsPage />
        </Route>
        <Route path="/publications">
          <PublicationPage />
        </Route>
        <Route path="/help/:slug">{/* initialize slug version first */}
          <HelpPage />
        </Route>
        <Route path="/help">{/* then fallback */}
          <HelpPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>{ /* = no match */ }
          <Error404Page />
        </Route>
      </Switch>
    </HashRouter>
  </>,
  document.querySelector('#welcome')
);
