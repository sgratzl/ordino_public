import * as React from 'react';
import { HeaderNavigation } from 'ordino';
import { OrdinoFooter } from 'ordino';
export function Error404Page() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h2", null, "Page Not Found")))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=Error404Page.js.map