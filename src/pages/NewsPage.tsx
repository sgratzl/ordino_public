import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';

export function NewsPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row">
          <div className="col"><h2>What's new?</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
