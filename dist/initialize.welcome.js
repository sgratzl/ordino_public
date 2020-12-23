import 'ordino/dist/templates/404.html';
import 'ordino/dist/robots.txt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage, DatasetsPage, FeaturesPage, NewsPage } from './pages';
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(HashRouter, null,
        React.createElement(Switch, null,
            React.createElement(Route, { path: "/news" },
                React.createElement(NewsPage, null)),
            React.createElement(Route, { path: "/features" },
                React.createElement(FeaturesPage, null)),
            React.createElement(Route, { path: "/datasets" },
                React.createElement(DatasetsPage, null)),
            React.createElement(Route, { exact: true, path: "/" },
                React.createElement(HomePage, null))))), document.querySelector('#welcome'));
//# sourceMappingURL=initialize.welcome.js.map