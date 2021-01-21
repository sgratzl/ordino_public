import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Nav, Card, Container, ListGroup, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export function PublicationPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <Container className="ordino-publication-page">
        <Row className="mt-4">
          <h4 className="text-left mb-3"><i className="mr-2 fas fa-book-open"></i> Publication</h4>
        </Row>
        <Row className="mb-4">
          <Card style={{overflow: "hidden"}} className="shadow-sm">
            <iframe className="" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
            <Card.Body>
              <Card.Text>
                Ordino is a web-based analysis tool for cancer genomics that allows users to flexibly rank, filter and explore genes, cell lines and tissue samples based on pre-loaded data, including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia and manually uploaded information. Interactive tabular data visualization that facilitates the user-driven prioritization process forms a core component of Ordino. Detail views of selected items complement the exploration.
                Findings can be stored, shared and reproduced via the integrated session management.
              </Card.Text>
              <Card.Text>
                Ordino was published in the Oxford Bioinformatics journal. Please consider a citation when using Ordino and publishing your results.
              </Card.Text>
              <Card.Text className="text-muted">
                Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger<br />
                Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples<br />
                Bioinformatics, 35(17): 3140-3142, 2019.
              </Card.Text>
            </Card.Body>
            <Card.Footer><Link to="/publication" className="btn btn-light"><i className="mr-1 fas fa-angle-right"></i> Read the publication</Link></Card.Footer>
          </Card>
        </Row>
      </Container>

      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
