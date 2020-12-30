import * as React from 'react';
import ordinoLogo from 'ordino_public/dist/assets/logos/ordino.svg';

export function OrdinoLogo() {
  return (
    <div className="ordino-logo">
      <img alt="" src={ordinoLogo} width="30" height="30" />{' '}Ordino
    </div>
  );
}
