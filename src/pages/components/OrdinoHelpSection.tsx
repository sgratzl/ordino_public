import React from 'react';
import {DisclaimerCard} from './DisclaimerCard';
import {OrdinoContactForm} from './OrdinoContactForm';
import {VideoCard} from './VideoCard';
import {Link, Element} from 'react-scroll';

export function OrdinoHelpSection() {
    return (<>
      <div className="scrollspy-nav flex-column ml-4 nav">
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
      </div>
      <div className="container ordino-help-page mt-9 mb-4">
        <div className="row">
          <div className="col">

            {/* VideoCard 1 */}
            <div id="ordino-at-a-glance" className="row">
              <div className="col">
                <Element name={`element-${1}`}>
                  <h4 className="text-left  mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-mountain"></i> Ordino at a Glance</h4>
                  <VideoCard />
                </Element>
              </div>
            </div>


            {/* ContactForm */}
            <div id="contact-us" className="row mt-6">
              <div className="col">
                <Element name={`element-${2}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-at"></i> Contact us</h4>
                  <OrdinoContactForm />
                </Element>
              </div>
            </div>

            {/* Disclaimer */}
            <div id="disclaimer" className="row mt-6">
              <div className="col">
                <Element name={`element-${3}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-exclamation-triangle "></i> Disclaimer</h4>
                  <DisclaimerCard />
                </Element>
              </div>
            </div>

            {/* Terms of Use */}
            <div id="terms-of-use" className="row mt-6">
              <div className="col">
                <Element name={`element-${4}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-smile"></i> Terms of Use</h4>
                  <div className="card shadow-sm">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">This instance of Ordino is intended for scientific research and non-commercial use only.</li>
                      <li className="list-group-item">Ordino cannot be used for the provision of medical advice.</li>
                      <li className="list-group-item">We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice.</li>
                      <li className="list-group-item">Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes.</li>
                      <li className="list-group-item">The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, bioliersity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties.</li>
                      <li className="list-group-item">We are not liable to you or third parties claiming through you, for any loss or damage.</li>
                      <li className="list-group-item">We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties.</li>
                      <li className="list-group-item">We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site.</li>
                      <li className="list-group-item">Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided.</li>
                      <li className="list-group-item">Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked.</li>
                      <li className="list-group-item">Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.</li>
                    </ul>
                  </div>
                </Element>
              </div>
            </div>

            {/* Source code */}
            <div id="source-code-licenses" className="row mt-6">
              <div className="col">
                <Element name={`element-${5}`}>
                  <h4 className="text-left mt-2 mb-3"><i className="mr-2 ordino-icon-2 fas fa-code"></i> Source Code {'&'} Licenses</h4>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="card-text">
                        The source code of Ordino is available under the Mozilla Public License (MPL) at <a href="https://github.com/Caleydo/ordino" target="_blank" rel="noopener noreferrer">GitHub</a>.
                      </p>
                      <p className="card-text">
                        This application is part of <a href="http://phovea.caleydo.org/" target="_blank" rel="noopener noreferrer">Phovea</a>, a platform for developing web-based visualization applications.
                        For tutorials, API docs, and more information about the build and deployment process, see the <a href="http://phovea.caleydo.org/" target="_blank" rel="noopener noreferrer">documentation page</a>.
                      </p>
                      <p className="card-text">
                        Version: 7.0.3-20201119-011617
                      </p>
                    </div>
                  </div>
                </Element>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
}
