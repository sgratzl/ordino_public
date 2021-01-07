import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';

export function PublicationPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row">
          <div className="col"><h2>Publication</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
