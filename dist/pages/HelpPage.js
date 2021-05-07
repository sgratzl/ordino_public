import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';
export function HelpPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement(OrdinoHelpSection, null),
        React.createElement(DevelopedByAffiliations, null),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=HelpPage.js.map