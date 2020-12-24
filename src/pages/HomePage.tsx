import * as React from 'react';
import {OrdinoHero} from './components/OrdinoHero';
import {GettingStarted} from './components/GettingStarted';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoFooter} from './components/OrdinoFooter';

export function HomePage() {

  return (
    <>
      <OrdinoHero></OrdinoHero>
      <div className="ordino-getting-started-wraper">
        <GettingStarted></GettingStarted>
        <hr className="m-0" />
        <DevelopedByAffiliations></DevelopedByAffiliations>
      </div>
      <div className="ordino-info-box-wrapper">

      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
