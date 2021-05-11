import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoHelpSection} from './components/OrdinoHelpSection';
import {Container} from 'react-bootstrap';


export function HelpPage() {
  return (
    <>
      <HeaderNavigation />
      <Container fluid className="ordino-help-page h-100 position-relative pt-5">
        <OrdinoHelpSection>
          <DevelopedByAffiliations />
          <OrdinoFooter />
        </OrdinoHelpSection>
      </Container>
    </>
  );
}
