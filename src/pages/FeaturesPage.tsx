import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';

export function FeaturesPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row">
          <div className="col"><h2>Features</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
