import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Nav, Container, Card} from 'react-bootstrap';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';
import {Link, Element} from 'react-scroll';

export function NewsPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <Container fluid className="news-page my-4">
        <Row>
          <Col sm={2}>
            <Nav className="scrollspy-nav flex-column">
              {sections.map(({name}, i) => (
                <Link className="nav-link pl-5" role="button" activeClass="nav-active" key={i} to={`element-${i}`} spy={true} smooth={true} offset={-180} duration={500}>
                  {name}
                </Link>
              ))}
            </Nav>
          </Col>
          <Col sm={7}>
            {sections.map(({name, markup}, i) => (
              <Element key={i} name={`element-${i}`} className="news-page-section">
                <h4 className="text-left mt-2 d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right"></i> {name}</h4>
                <Card className="shadow-sm p-3 h-100">
                  <Card.Body>
                    <Row xl={2} lg={1}  className="align-items-top">
                      <Col sm={7}>
                        {markup()}
                      </Col>
                      <Col >
                        <Card.Img src={cardImage} className="img-fit" alt="Card image" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Element>
            ))}
          </Col>
        </Row>
      </Container>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}


const sections = [
  {
    name: 'Ordino 7.0.0',
    markup: () => (
      <ul className="list-unstyled">
        <li>
          Improve usability of ranking views<br />
          <ul >
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
        <li>
          Integration of Tourdino as ranking side panel<br />
          <ul >
            <li>
              Support statistical analysis
                </li>
          </ul>
        </li>
        <li>
          Update to hg38 database<br />
        </li>
        <li>
          New scores<br />
          <ul >
            <li>
              Add cell line and tissue scores for HLA Type, MSI Status, and Mutational Burden
                </li>
            <li>
              Add cell line score PRISM drug screen
                </li>
          </ul>
        </li>
        <li>
          New Ordino tours:<br />
          <ul >
            <li>
              Overview of Start Menu
                </li>
            <li>
              Adding Data Columns
                </li>
          </ul>
        </li>
        <li>
          Improve support for Boolean columns in uploaded Excel files<br />
        </li>
      </ul >)

  },
  {
    name: 'Ordino 6.0.0',
    markup: () => (
      <ul className="list-unstyled">
        <li> LineUp v3.2</li>
        <li>Add Matomo tracking</li>
        <li>Updated internal and external detail views to latest genome build</li>
        <li>Improved add column dropdown menu</li>
        <li>Improved session loading / saving menu</li>
        <li>Simplified data download dialog</li>
        <li>Fixed filtering of missing values of numerical columns in LineUp cannot be undone</li>
        <li>Remove surplus divider in user menu</li>
        <li>When checking for browser compatibility, indicate that IE is not working</li>
        <li>Add help text to "Save List of Entities" dialog</li>
        <li>When uploading a dataset, DB columns cannot be added</li>
        <li>Slim Ordino header does not look nice on hover</li>
        <li>Rename "RegExp" into "Use regular expressions"</li>
        <li>Rename "TPM" to "Normalized Gene Expression (TPM Values)"</li>
        <li>Aggregated score: Comparison value should allow float numbers</li>
        <li>When checking for browser compatibility, indicate that IE is not working</li>
      </ul >)

  },
  {
    name: 'Ordino 5.4.0',
    markup: () => (
      <ul className="list-unstyled">
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
      </ul >)

  },
  {
    name: 'Ordino 5.0.0',
    markup: () => (
      <ul className="list-unstyled">
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
        <li>
          Improve usability of ranking views<br />
          <ul>
            <li>
              Dialogs, such as filter, provide a live preview
                </li>
            <li>
              Harmonize dialogs
                </li>
            <li>
              Collapse/Expand of groups is recorded in session history"
              </li>
          </ul>
        </li>
      </ul >)

  },
];

