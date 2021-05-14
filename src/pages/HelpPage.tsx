import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoHelpSection} from './components/OrdinoHelpSection';
import {useScrollToSlug} from 'ordino';

export function HelpPage() {
  useScrollToSlug();

  return (
    <>
      <HeaderNavigation fixed="top" />
      <OrdinoHelpSection />
      <DevelopedByAffiliations />
      <OrdinoFooter />
    </>
  );
}
