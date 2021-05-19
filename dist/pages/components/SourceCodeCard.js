import { useAsync } from 'ordino';
import { AppMetaDataUtils } from 'phovea_ui';
import React from 'react';
export function SourceCodeCard() {
    const loadMetaData = React.useMemo(() => () => AppMetaDataUtils.getMetaData(), []);
    const { status, value } = useAsync(loadMetaData);
    return (React.createElement(React.Fragment, null, status === 'success' &&
        React.createElement("div", { className: "card shadow-sm" },
            React.createElement("div", { className: "card-body" },
                React.createElement("p", { className: "card-text" }, "The source code of Ordino is available under the Mozilla Public License (MPL) at GitHub."),
                React.createElement("p", { className: "card-text" }, "This application is part of Phovea, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the documentation page."),
                React.createElement("p", { className: "card-text" }, `Version: ${value.version}`)))));
}
//# sourceMappingURL=SourceCodeCard.js.map