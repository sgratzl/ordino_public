import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
export function HelpPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h2", null, "Help")))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=HelpPage.js.map