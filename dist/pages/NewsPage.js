import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
export function NewsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h2", null, "What's new?")))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=NewsPage.js.map