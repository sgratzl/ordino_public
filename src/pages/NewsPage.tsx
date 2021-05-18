import * as React from 'react';
import {HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem} from 'ordino';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';
import {UniqueIdManager} from 'phovea_core';


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
      </ul>)

  },
];



export function NewsPage() {
  const suffix = React.useMemo(() => UniqueIdManager.getInstance().uniqueId(), []);
  return (
    <>
      <HeaderNavigation/>
      <div className="position-relative pt-5">
        <OrdinoScrollspy items={sections.map((section, index) => ({id: `card${index}_${suffix}`, name: section.name}))}>
          {(handleOnChange) =>
            <>
              <div className="container pb-10 pt-5">
                <div className="row">
                  <div className="col">
                    {sections.map((item, index) => {
                      return (
                        // `id` attribute must match the one in the scrollspy
                        <OrdinoScrollspyItem className="pt-3 pb-5" id={`card${index}_${suffix}`} key={item.name} index={index} handleOnChange={handleOnChange}>
                          <>
                            <h4 className="text-left mt-2 d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right"></i> {item.name}</h4>
                            <div className="card shadow-sm p-3 h-100">
                              <div className="card-body">
                                <div className="align-items-top row row-cols-xl-2 row-cols-lg-1">
                                  <div className="col col-sm-7">
                                    {item.markup()}
                                  </div>
                                  <div className="col">
                                    <img src={cardImage} className="card-img img-fit" alt="Card image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        </OrdinoScrollspyItem>
                      );
                    })}
                  </div>
                </div>
              </div>
              <OrdinoFooter></OrdinoFooter>
            </>
          }
        </OrdinoScrollspy>
      </div>
    </>
  );
}
