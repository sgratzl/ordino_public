import * as React from 'react';
import { OrdinoHero } from './components/OrdinoHero';
import { GettingStarted } from './components/GettingStarted';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoFooter } from './components/OrdinoFooter';
export function HomePage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(OrdinoHero, null),
        React.createElement("div", { className: "ordino-getting-started-wraper" },
            React.createElement(GettingStarted, null),
            React.createElement("hr", { className: "m-0" }),
            React.createElement(DevelopedByAffiliations, null)),
        React.createElement("div", { className: "ordino-info-box-wrapper" }),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=HomePage.js.map