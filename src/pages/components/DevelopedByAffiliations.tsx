import * as React from 'react';
import logoBI from 'ordino_public/dist/assets/logos/boehringer-ingelheim.svg';
import logoJKU from 'ordino_public/dist/assets/logos/johannes-kepler-university-linz.svg';
import logoDatavisyn from 'ordino_public/dist/assets/logos/datavisyn.svg';

export function DevelopedByAffiliations() {
  return (
    <section className="container ordino-developed-by-affiliations py-6">
      <div className="row">
        <div className="col position-relative mb-3 text-center">
          <p>Ordino is developed by</p>
        </div>
      </div>
      <div className="row">
        <div className="col position-relative text-center">
          <a href="https://jku.at" target="_blank" rel="noopener noreferrer"><img src={logoJKU} alt="Johannes Kepler University Linz" style={{height: '45px'}} /></a>
        </div>
        <div className="col position-relative text-center">
          <a href="https://www.boehringer-ingelheim.com" target="_blank" rel="noopener noreferrer"><img src={logoBI} alt="Boehringer Ingelheim" style={{height: '45px'}} /></a>
        </div>
        <div className="col position-relative text-center">
          <a href="https://www.datavisyn.io" target="_blank" rel="noopener noreferrer"><img src={logoDatavisyn} alt="datavisyn" style={{height: '35px'}} /></a>
        </div>
      </div>
    </section>
  );
}
