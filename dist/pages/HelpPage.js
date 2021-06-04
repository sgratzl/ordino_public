import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';
import { useScrollToSlug } from 'ordino';
export function HelpPage() {
    useScrollToSlug();
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container-fluid ordino-help-page h-100 position-relative pt-6" },
            React.createElement(OrdinoHelpSection, null,
                React.createElement(DevelopedByAffiliations, null),
                React.createElement(OrdinoFooter, null)))));
}
//# sourceMappingURL=HelpPage.js.map