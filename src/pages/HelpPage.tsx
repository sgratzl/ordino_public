import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Nav, Container, Card} from 'react-bootstrap';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {Link, Element} from 'react-scroll';
import {VideoCard} from './components/VideoCard';
import {OrdinoContactForm} from './components/OrdinoContactForm';
import {DisclaimerCard} from './components/DisclaimerCard';


export function HelpPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>
      <Nav className="scrollspy-nav flex-column ml-4">
        <Link className="nav-link" role="button" to={`element-${1}`} spy={true} smooth={true} offset={-180} duration={500}>
          Ordino at a Glance
              </Link>
        <Link className="nav-link" role="button" to={`element-${2}`} spy={true} smooth={true} offset={-180} duration={500}>
          Contact us
              </Link>
        <Link className="nav-link" role="button" to={`element-${3}`} spy={true} smooth={true} offset={-180} duration={500}>
          Disclaimer
              </Link>
        <Link className="nav-link" role="button" to={`element-${4}`} spy={true} smooth={true} offset={-200} duration={500}>
          Terms of Use
              </Link>
        <Link className="nav-link" role="button" to={`element-${5}`} spy={true} smooth={true} offset={-230} duration={500}>
          Source Code
              </Link>
      </Nav>
      <Container className="ordino-help-page mt-9 mb-4">
        <Row >
          <Col>

            {/* VideoCard 1 */}
            <Row>
              <Col>
                <Element name={`element-${1}`}>
                  <h4 className="text-left  mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-mountain"></i> Ordino at a Glance</h4>
                  <VideoCard />
                </Element>
              </Col>
            </Row>


            {/* ContactForm */}
            <Row className="mt-6">
              <Col>
                <Element name={`element-${2}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-at"></i> Contact us</h4>
                  <OrdinoContactForm />
                </Element>
              </Col>
            </Row>

            {/* Disclaimer */}
            <Row className="mt-6">
              <Col>
                <Element name={`element-${3}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-exclamation-triangle "></i> Disclaimer</h4>
                  <DisclaimerCard />
                </Element>
              </Col>
            </Row>

            {/* Terms of Use */}
            <Row className="mt-6">
              <Col>
                <Element name={`element-${4}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-smile"></i> Terms of Use</h4>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Text>
                        1. Ordino is intended for scientific research and non-commercial use only.<br />
                        2. Ordino cannot be used for the provision of medical advice.<br />
                        3. We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice.<br />
                        4. Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes.<br />
                        5. The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties.<br />
                        6. We are not liable to you or third parties claiming through you, for any loss or damage.<br />
                        7. We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties.<br />
                        8. We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site.<br />
                        9. Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided.<br />
                        10. Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked.<br />
                        11. Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.<br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Element>
              </Col>
            </Row>

            {/* Source code */}
            <Row className="mt-6">
              <Col>
                <Element name={`element-${5}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fab fa-github"></i> Source Code {'&'} Licenses</h4>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Text>
                        The source code of Ordino is available under the Mozilla Public License (MPL) at GitHub.
                      </Card.Text>
                      <Card.Text>
                        This application is part of Phovea, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the documentation page.
                      </Card.Text>
                      Version: 7.0.3-20201119-011617
                      <Card.Text>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Element>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <DevelopedByAffiliations></DevelopedByAffiliations>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
