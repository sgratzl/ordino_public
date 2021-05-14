import * as React from 'react';
import {Link} from 'react-router-dom';
import ordinoHero from 'ordino_public/dist/assets/ordino-hero.svg';
import {HeaderNavigation} from 'ordino';

export function OrdinoHero() {
  return (
    <>
    <div className="ordino-hero">
      <HeaderNavigation bg="transparent"></HeaderNavigation>
      <div className="container">
        <div className="row ordino-hero-claim my-4">
          <div className="col text-center">
            <p>Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata.</p>
          </div>
        </div>
        <div className="row ordino-hero-actions my-4">
          <div className="col text-center">
            <button type="button" className="btn btn-link btn-lg" data-toggle="modal" data-target="#ordino-intro-video-modal">
              <i className="fas fa-play"></i>
              Watch intro video
            </button>
          </div>
          <div className="col text-center">
            <Link to="/help" className="btn btn-link btn-lg">
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
    <div className="modal fade" id="ordino-intro-video-modal" aria-labelledby="ordino-intro-video-modal-title" aria-hidden="true">
      <div className="modal-dialog ordino-intro-video-modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4" id="ordino-intro-video-modal">Introduction to Ordino</div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
