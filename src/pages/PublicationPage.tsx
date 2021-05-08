import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';

export function PublicationPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>

      <div className="ordino-publication-page my-9 container">
        <div className="mt-4 row">
          <h4 className="text-left d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-2  fas fa-book-open"></i> Publication</h4>
        </div>
        <div className="mb-4 row">
          <div className="shadow-sm card" style={{overflow: 'hidden'}}>
            <iframe className="" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
            <div className="card-body">
              <p className="card-text">
                Ordino is a web-based analysis tool for cancer genomics that allows users to flexibly rank,
                filter and explore genes, cell lines and tissue samples based on pre-loaded data,
                including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia and manually
                uploaded information. Interactive tabular data visualization that facilitates the
                user-driven prioritization process forms a core component of Ordino. Detail views
                of selected items complement the exploration. Findings can be stored, shared and
                reproduced via the integrated session management.
              </p>
              <p className="card-text">
                Ordino was published in the Oxford Bioinformatics journal. Please consider a citation
                when using Ordino and publishing your results.
              </p>
              <p className="text-muted card-text">
                Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger<br />
                Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples<br />
                Bioinformatics, 35(17): 3140-3142, 2019.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://dx.doi.org/10.1093/bioinformatics/btz009" target="_blank" rel="noopener noreferrer" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> Read the publication</a>
            </div>
          </div>
        </div>
      </div>

      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
