import * as React from 'react';
import {Link} from 'react-router-dom';

export function OrdinoTeaserCards() {
  return (
    <div className="ordino-teaser-cards container">
      <div className="row row-cols-1 row-cols-md-2 my-5">
        <div className="col mb-4">
          <h4 className="text-center mb-3"><i className="mr-2 ordino-icon-2 fas fa-newspaper"></i> What's new?</h4>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="card-text">
                With Ordino v7.0.0 we have improved the usability of ranking views. The new ranking side panel supports the statistical analysis of rankings.
              </p>
              <p className="card-text">
                Ordino is now using the hg38 database and provides new scores for HLA Type, MSI Status, and Mutational Burden for cell lines and tissues samples.
                Furthermore the PRISM drug screen can be added as cell line score.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/news" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> Read the changelog</Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <h4 className="text-center mb-3"><i className="mr-2 ordino-icon-2 fas fa-book-open"></i> Publication</h4>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="card-text">
                Ordino and its components have been published in multiple scientific articles. Please cite the following article when using Ordino and publishing your results.
              </p>
              <p className="card-text text-muted">
                Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger.<br />
                <b>Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples.</b><br />
                <i> Bioinformatics, 35(17): 3140-3142, 2019. </i>
                <a href="http://dx.doi.org/10.1093/bioinformatics/btz009" target="_blank" rel="noopener noreferrer">dx.doi.org/10.1093/bioinformatics/btz009</a>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/publications" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> List of all publications</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
