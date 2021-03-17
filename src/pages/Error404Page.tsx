import * as React from 'react';
import {HeaderNavigation} from 'ordino';
import {OrdinoFooter} from 'ordino';

export function Error404Page() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row">
          <div className="col"><h2>Page Not Found</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
