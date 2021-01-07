import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

export function OrdinoTeaserCards() {
  return (
    <div className="ordino-teaser-cards container">
      <div className="row row-cols-1 row-cols-md-2 my-5">
        <div className="col mb-4">
          <h4 className="text-center mb-3"><i className="mr-2 fas fa-newspaper"></i> What's new?</h4>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Text>
                With Ordino v7.0.0 we have improved the usability of ranking views. The new ranking side panel supports the statistical analysis of rankings.
              </Card.Text>
              <Card.Text>
                Ordino is now using the hg38 database and provides new scores for HLA Type, MSI Status, and Mutational Burden for cell lines and tissues samples.
                Furthermore the PRISM drug screen can be added as cell line score.
              </Card.Text>
            </Card.Body>
            <Card.Footer><Link to="/news" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> Read the changelog</Link></Card.Footer>
          </Card>
        </div>
        <div className="col mb-4">
          <h4 className="text-center mb-3"><i className="mr-2 fas fa-book-open"></i> Publication</h4>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Text>
                Ordino was published in the Oxford Bioinformatics journal. Please consider a citation when using Ordino and publishing your results.
              </Card.Text>
              <Card.Text className="text-muted">
                Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger<br/>
                Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples<br/>
                Bioinformatics, 35(17): 3140-3142, 2019.
              </Card.Text>
            </Card.Body>
            <Card.Footer><Link to="/publication" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> Read the publication</Link></Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
