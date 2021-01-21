import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Nav, ListGroup, Navbar} from 'react-bootstrap';
import {Waypoint} from 'react-waypoint';
import {useRef} from 'react';
import {OrdinoTeaserCards} from './components/OrdinoTeaserCards';
import {ReleaseNoteScard} from './components/ReleaseNotesCard';
import {debounce} from 'lodash';

const sections = [
  {
    name: 'Ordino 7.0.0',
    markup: () => (
      <ul>
        <li>
          <b>Improve usability of ranking views</b><br />
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
          <b>Integration of Tourdino as ranking side panel</b><br />
          <ul>
            <li>
              Support statistical analysis
                </li>
          </ul>
        </li>
        <li>
          <b>Update to hg38 database</b><br />
        </li>
        <li>
          <b> New scores</b><br />
          <ul>
            <li>
              Add cell line and tissue scores for HLA Type, MSI Status, and Mutational Burden
                </li>
            <li>
              Add cell line score PRISM drug screen
                </li>
          </ul>
        </li>
        <li>
          <b>New Ordino tours:</b><br />
          <ul>
            <li>
              Overview of Start Menu
                </li>
            <li>
              Adding Data Columns
                </li>
          </ul>
        </li>
        <li>
          <b>Improve support for Boolean columns in uploaded Excel files</b><br />
        </li>
      </ul >)

  },
  {
    name: 'Ordino 6.0.0',
    markup: () => (
      <ul>
        <li>  <b>LineUp v3.2</b></li>
        <li> <b>Add Matomo tracking</b></li>
        <li> <b>Updated internal and external detail views to latest genome build</b></li>
        <li> <b>Improved add column dropdown menu</b></li>
        <li> <b>Improved session loading / saving menu</b></li>
        <li> <b>Simplified data download dialog</b></li>
        <li> <b>Fixed filtering of missing values of numerical columns in LineUp cannot be undone</b></li>
        <li> <b>Remove surplus divider in user menu</b></li>
        <li> <b>When checking for browser compatibility, indicate that IE is not working</b></li>
        <li> <b>Add help text to "Save List of Entities" dialog</b></li>
        <li> <b>When uploading a dataset, DB columns cannot be added</b></li>
        <li> <b>Slim Ordino header does not look nice on hover</b></li>
        <li> <b>Rename "RegExp" into "Use regular expressions"</b></li>
        <li> <b>Rename "TPM" to "Normalized Gene Expression (TPM Values)"</b></li>
        <li> <b>Aggregated score: Comparison value should allow float numbers</b></li>
        <li> <b>When checking for browser compatibility, indicate that IE is not working</b></li>
      </ul >)

  },
  {
    name: 'Ordino 5.4.0',
    markup: () => (
      <ul>
        <li>
          <b>Improve usability of ranking views</b><br />
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
          <b>Improve usability of ranking views</b><br />
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
          <b>Improve usability of ranking views</b><br />
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
      <ul>
        <li>
          <b>Improve usability of ranking views</b><br />
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
          <b>Improve usability of ranking views</b><br />
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
          <b>Improve usability of ranking views</b><br />
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
]


export function NewsPage() {
  const [active, setActive] = React.useState('')

  const sectionsRefs = {}
  sections.forEach(section => sectionsRefs[section.name] = useRef())
  const scrollToView = (evt, name: string) => {
    sectionsRefs[name].current.scrollIntoView({behavior: "smooth", block: "center"}).then((e) => console.log('scrolling- finished'));
  }


  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <div className="container-md news-page">
        <Row>
          <Col sm={3}>
            <Nav style={{position: 'fixed'}} className="flex-column">
              {sections.map(({name}, i) => (
                <Nav.Link className={`pl-5 ${active === name ? 'active' : ''} `} onClick={(evt) => scrollToView(evt, name)} key={i}> {name}</Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            {sections.map(({name, markup}, i) => (
              <Waypoint topOffset={'40%'} bottomOffset={'70%'} key={i} onEnter={() => setActive(name)}>
                <section style={{paddingBottom: '60px'}} ref={sectionsRefs[name]} key={i}>
                  <ReleaseNoteScard headerText={name} >{
                    markup()
                  }</ReleaseNoteScard>
                </section>
              </Waypoint>
            ))}
          </Col>
        </Row>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
