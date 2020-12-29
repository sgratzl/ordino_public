import * as React from 'react';
import {HeaderNavigation} from './HeaderNavigation';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ordinoHero from 'ordino_public/dist/assets/ordino-hero.svg';

export function OrdinoHero() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ordino-hero">
      <HeaderNavigation></HeaderNavigation>
      <div className="container">
        <div className="row ordino-hero-claim my-4">
          <div className="col text-center">
            <p>Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata.</p>
          </div>
        </div>
        <div className="row ordino-hero-actions my-4">
          <div className="col text-center">
            <Button variant="link" size="lg" onClick={() => setModalShow(true)}>
              <i className="fas fa-play"></i>
              Watch intro video
            </Button>
            <IntroVideoModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
          <div className="col text-center">
            <Link to="/tours" className="btn btn-link btn-lg">
              <i className="fas fa-question"></i>
              Learn more about Ordino
            </Link>
          </div>
        </div>
        <div className="row ordino-hero-image mt-5">
          <div className="col">
            <img src={ordinoHero} alt="Screenshot of an analysis with Ordino" />
          </div>
        </div>
      </div>
    </div>
  );
}


function IntroVideoModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="ordino-intro-video-modal"
      aria-labelledby="ordino-intro-video-modal"
      // centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="ordino-intro-video-modal">
          Introduction to Ordino
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
      </Modal.Body>
    </Modal>
  );
}
