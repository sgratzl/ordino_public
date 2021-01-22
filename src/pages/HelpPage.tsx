import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Nav, Container, Button, Form, Card, ListGroup, Navbar} from 'react-bootstrap';
import {Waypoint} from 'react-waypoint';
import {useRef} from 'react';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';

export function HelpPage() {
  const [section, setSection] = React.useState('')
  //Todo simplify scrollpsy logic
  const sectionsRefs = {}
  sectionsRefs['first'] = useRef();
  sectionsRefs['second'] = useRef();
  sectionsRefs['third'] = useRef();
  sectionsRefs['fourth'] = useRef();
  sectionsRefs['fifth'] = useRef();
  const scrollToView = (evt, name: string) => {
    console.log()
    sectionsRefs[name].current.scrollIntoView({behavior: "smooth", block: "start"});
  }

  const activeClass = (name) => section === name ? 'active' : ''
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container-md ordino-help-page">
        <Row>
          <Col sm={3}>
            <Nav style={{position: 'fixed'}} className="flex-column">
              <Nav.Link className={`pl-5 text-left ${activeClass('first')} `} onClick={(evt) => scrollToView(evt, 'first')}> Ordino at a glance</Nav.Link>
              <Nav.Link className={`pl-5 ${activeClass('second')} `} ref={sectionsRefs['second']} onClick={(evt) => scrollToView(evt, 'second')}> Contact us</Nav.Link>
              <Nav.Link className={`pl-5 ${activeClass('third')} `} ref={sectionsRefs['third']} onClick={(evt) => scrollToView(evt, 'third')}> Disclaimer</Nav.Link>
              <Nav.Link className={`pl-5 ${activeClass('fourth')} `} ref={sectionsRefs['fourth']} onClick={(evt) => scrollToView(evt, 'fourth')}> Terms of Use</Nav.Link>
              <Nav.Link className={`pl-5 ${activeClass('fifth')} `} ref={sectionsRefs['fifth']} onClick={(evt) => scrollToView(evt, 'fifth')}> Source code {"&"} licenses</Nav.Link>
            </Nav>
          </Col>
          <Col sm={9}>
            <Row>
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} onEnter={() => setSection('first')}>
                <section ref={sectionsRefs['first']} style={{paddingBottom: '60px', height: "100%"}}  >
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 fas fa-mountain"></i> Ordino at a glance</h4>
                  <VideoCard />
                </section>
              </Waypoint>
            </Row>
            <Row>
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} onEnter={() => setSection('second')}>
                <section ref={sectionsRefs['second']} style={{paddingBottom: '60px', width: "100%", height: "100%"}}  >
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 fas fa-at"></i> Contact us</h4>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Text>
                        {"Do you have questions or found a bug, do not hasitate to contact us using the contact form below. You can also contact us by writing an email to "}
                        <Card.Link href="mailto:ordino@caleydo.org.">ordino@caleydo.org.</Card.Link> or posting a message in the Microsoft Team. We are glad to help you.
                      </Card.Text>
                      <ContactForm />
                    </Card.Body>
                  </Card>
                </section>
              </Waypoint>
            </Row>
            <Row>
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} onEnter={() => setSection('third')}>
                <section ref={sectionsRefs['third']} style={{paddingBottom: '60px', height: "100%"}}  >
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 fas fa-exclamation-triangle "></i> Disclaimer</h4>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Text>
                        The information provided by Johannes Kepler University Linz, Boehringer Ingelheim RCV GmbH {"&"} Co KG, and datavisyn GmbH (“we,” “us” or “our”) on https://ordino.calyedoapp.org (the “Site”) is for general research purposes and non-commercial use only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, expressed or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.

                    </Card.Text>
                      <Card.Text>
                        Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.

                    </Card.Text>
                      <Card.Text>
                        The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through or embedded within the Site.

                    </Card.Text>
                      <Card.Text>
                        The Site cannot and does not contain medical or health advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                    </Card.Text>
                    </Card.Body>
                  </Card>
                </section>
              </Waypoint>
            </Row>
            <Row>
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} onEnter={() => setSection('fourth')}>
                <section ref={sectionsRefs['fourth']} style={{paddingBottom: '60px', height: "100%"}}  >
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 fas fa-smile"></i> Terms of Use</h4>
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
                </section>
              </Waypoint>
            </Row>
            <Row>
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} onEnter={() => setSection('fifth')}>
                <section ref={sectionsRefs['fifth']} style={{paddingBottom: '60px', height: "100%"}}  >
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 fab fa-github"></i> Source code {"&"} licenses</h4>
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
                </section>
              </Waypoint>
            </Row>
          </Col>
        </Row>
      </div>
      <DevelopedByAffiliations></DevelopedByAffiliations>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}


const ContactForm = () => {
  // Todo implemment backend to send email
  const handleSubmit = () => null;

  return (
    <Form onSubmit={() => handleSubmit()}>
      <Form.Group className="row-cols-md-3" controlId="exampleForm.ControlSelect1">
        <Form.Label>Type of contact</Form.Label>
        <Form.Control as="select">
          <option>I have a question</option>
          <option>I want to report a bug</option>
          <option>Placeholder</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Row className="justify-content-end">
        <Col md={"auto"}>
          <Button variant="secondary" type="submit">
            Send Message
          </Button>
        </Col>
      </Form.Row>

    </Form>
  )
}


function VideoCard() {
  return (
    <Card style={{overflow: "hidden"}} className="shadow-sm">
      <iframe src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
      <Card.Body>
        <Card.Text>
          Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes,
          cell lines, and tissue samples based on a rich set of experimental and metadata.
      </Card.Text>
        <Card.Title>
          <i className="mr-2 fas fa-check"></i>Features
      </Card.Title>
        <Card.Text>
          You can find an overview of the main features here.
      </Card.Text>
        <Card.Title>
          <i className="mr-2 fas fa-database"></i>Datasets
      </Card.Title>
        <Card.Text>
          Many datasets have been integrated and are ready to explore. Read more about datasets.
      </Card.Text>
        <Card.Title>
          <i className="mr-2 fas fa-mouse-pointer"></i>Tours
      </Card.Title>
        <Card.Text>
          Another good way to learn about the main features of Ordino are our interactive tours that you can find here.
      </Card.Text>
        <Card.Title>
          <i className="mr-2 fas fa-book-open"></i>Publications
      </Card.Title>
        <Card.Text>
          Ordino and its components have been described in several scientific publications. More about the publications.
      </Card.Text>
      </Card.Body>
    </Card>
  )
}