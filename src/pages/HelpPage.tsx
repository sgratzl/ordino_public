import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';

export function HelpPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row">
          <div className="col"><h2>Help</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
