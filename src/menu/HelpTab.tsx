import {OrdinoFooter} from 'ordino';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {DevelopedByAffiliations} from '../pages/components/DevelopedByAffiliations';
import {OrdinoHelpSection} from '../pages/components/OrdinoHelpSection';

export default function HelpTab() {
    return <>
        <BrowserRouter basename="/#">
            <OrdinoHelpSection openInNewWindow>
                <DevelopedByAffiliations></DevelopedByAffiliations>
                <OrdinoFooter openInNewWindow></OrdinoFooter>
            </OrdinoHelpSection>
        </BrowserRouter>
    </>;
}
