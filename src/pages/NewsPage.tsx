import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import gene_signature from 'ordino_public/dist/assets/pages/gene_signature.jpg';
import annotation_column from 'ordino_public/dist/assets/pages/annotation_column.png';
import data_download from 'ordino_public/dist/assets/pages/data_download.png';
import tourdino from 'ordino_public/dist/assets/pages/tourdino.jpg';
import {Link, Element} from 'react-scroll';

const sections = [
  {
    name: 'Version 8.0.0 (2021-03-24)',
    markup: () => (
      <>
        <p className="lead">
          This update contains more <b>data</b>, various <b>usability improvements</b>, and several <b>bug fixes</b>. The most important changes are:
        </p>

        <h4>New data</h4>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Gene Signature Scores</div>
              <div className="card-body">
                <p className="card-text">
                  <i>Gene Signature Scores</i> are now available for cell lines and tissue samples (including GTEx, TCGA, and PDX models). These can be added using the <i>Add Column</i> dialog:
                </p>
              </div>
              <div className="card-img text-center">
                <img src={gene_signature} height={350} alt="Gene Signature Score" />
              </div>
              <div className="card-body">
                <p className="card-text">Currently, the following gene signature scores are available:</p>
                <ul>
                  <li>
                    NIBR_IFN (Novartis 38 Gene Interferon activity signature)
                  </li>
                  <li>
                    MERCK18 (MERCK's 18 gene signature for PD1-inhibitor response)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h4>Usability improvements</h4>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Annotation Columns</div>
              <div className="card-body">
                <p className="card-text">It is now possible to add multiple "Annotation Columns" at once</p>
              </div>
              <div className="card-img-bottom text-center">
                <img src={annotation_column} height={200} alt="Annotation Column" />
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Data download</div>
              <div className="card-body">
                <p className="card-text">The data download dialog has been improved</p>
              </div>
              <div className="card-img-bottom text-center">
                <img src={data_download} height={400} alt="Download Data" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    name: 'Version 7.0.0 (2020-08-26)',
    markup: () => (
      <>
        <p className="lead">
          This update contains more <b>data</b>, many <b>new features</b>, various <b>improvements</b>, and a large number of <b>bug fixes</b>. The most important changes are:
        </p>

        <h4>New data</h4>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Database</div>
              <div className="card-body">
                <p className="card-text">All data has be been updated from hg19 to hg38!</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">HLA-A type, Mutational Burden, and MSI Status</div>
              <div className="card-body">
                <p className="card-text">Now, HLA-A type, Mutational Burden, and MSI Status data is available for many cell line and tissue samples.</p>
                <p className="card-text"><i> How to access</i>: Open a list of cell lines 	&#8594; click on "+" to open the "add column" dialog 	&#8594; select "Annotation Columns" 	&#8594; select the data of interest.</p>
              </div>
            </div>
          </div>
        </div>

        <h4>Completely new features</h4>
        <div className="row row-cols-1">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Basic statistical analyses</div>
              <img className="card-img w-100 h-auto" src={tourdino} height={400} alt="Tourdino" />
              <div className="card-body">
                <p className="card-text">It is now possible to do basic statistical analyses, like calculating the correlation of two columns, directly in Ordino.</p>
                <p className="card-text"><i>How to access</i>: Click on the calculator icon on the right. This opens a new side-panel (highlighted in red in the screenshot below).<br /> There you can select which columns to compare and then get detailed information about the result.</p>
              </div>
            </div>
          </div>
        </div>

        <h4>Improved features</h4>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved column operations (filtering, sorting, etc)</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>How to access</i>: click on any of the icons in the column headers</li>
                <li className="list-group-item">
                  The column dialogs were harmonized.
                </li>
                <li className="list-group-item">
                  There is now a live preview. For instance, if you modify the filter setting of a column, you can see in the background how this will affect your list of genes, cell lines, and tissue samples.
                </li>
                <li className="list-group-item">
                  It is now possible to reset all filters at once in the right side-panel. <i>Access side-panel by clicking on the left-facing arrow in the menu on the right</i>
                </li>
                <li className="list-group-item">
                  The grouping of text columns (like mutations) is now working much better (e.g., allowing you to split your cell lines by specific mutations).<br />
                  <i>How to access: click the "…" in the column header and then select "Group By"</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Briefly noted</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Improved look and feel of the list of cell lines, genes, and tissue samples.
                </li>
                <li className="list-group-item">
                  Collapsing and expanding of sample / gene groups is now recorded in the session history.
                </li>
                <li className="list-group-item">
                  The columns "AA mutated" and "DNA mutated" have been harmonized. There is now no category "Unknown" anymore, but missing values are handled the same way as in all other columns.
                </li>
                <li className="list-group-item">
                  File upload has been improved and now supports boolean (i.e., true/false) columns.
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Interactive help tours</div>
              <div className="card-body">
                <p className="card-text">And to make it easier for new users to get to know Ordino, we also added two additional interactive help tours that guide you through the application.</p>
                <p className="card-text"><i>These can be accessed by clicking on the "?" in the upper right corner of Ordino</i></p>
              </div>
            </div>
          </div>
        </div>
      </>)
  },
  {
    name: 'Version 6.0.0 (2019-10-14)',
    markup: () => (
      <>
        <p className="lead">
          This update contains new <b>features</b>, various <b>improvements</b>, and many <b>bug fixes</b>. The most important changes are:
        </p>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Session management</div>
              <div className="card-body">
                <p className="card-text">There is now an improved menu for saving and loading of analysis sessions.</p>
                <p className="card-text">This menu is now called "Analysis Session Management" and is available in the upper right corner.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Session sharing</div>
              <div className="card-body">
                <p className="card-text">Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people.</p>
                <p className="card-text">To do so, click on "Advanced" in the "Save Session" menu. The same is now possible for sharing uploaded data sets.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Download data</div>
              <div className="card-body">
                <p className="card-text">The "Download Data" menu has been simplified.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    name: 'Version 5.1.0 (2018-12-05)',
    markup: () => (
      <>
        <p className="lead">
          This update contains new <b>features</b>, <b>improvements</b>, and <b>bug fixes</b>. The most important changes are:
        </p>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Briefly noted</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  File upload is working again.
                </li>
                <li className="list-group-item">
                  The data up- and download now supports Excel files (*.xlsx).
                </li>
                <li className="list-group-item">
                  A guided tour explains the basic features of Ordino. You can start the tour by clicking on the '?' in the upper right corner.
                </li>
                <li className="list-group-item">
                  You can now copy gene and cell line lists from almost everywhere (e.g., comma or line separated) and paste them into the text field on the welcome page.
                </li>
                <li className="list-group-item">
                  The overview mode (last button on the right site) is now working for very large lists.
                </li>
                <li className="list-group-item">
                  Spearman correlation computation has been added to the "Co-expression" Detail View.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </>
    )
  },
  {
    name: 'Version 5.0.0 (2018-11-07)',
    markup: () => (
      <>
        <p className="lead">
          This update contains more <b>data</b>, various <b>usability improvements</b>, and several <b>bug fixes</b>. The most important changes are:
        </p>
        <div className="row row-cols-2">
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved column headers and column menus</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Column headers start with gene/cell line name and information about data type.
                </li>
                <li className="list-group-item">
                  New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another).
                </li>
                <li className="list-group-item">
                  Extended coloring options for numeric columns.
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved column sorting and grouping</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  The order of multiple sorting/grouping columns can now be explicitly specified in the side panel on the right (can be opened by clicking on the arrow on the right).
                </li>
                <li className="list-group-item">
                  The values of numeric columns can be grouped into an arbitrary number of bins.
                </li>
                <li className="list-group-item">
                  The values of text columns can now be grouped.
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved aggregated columns</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Boxplot columns now show outliers.
                </li>
                <li className="list-group-item">
                  Heatmap columns now support mouse over to identify individual genes/cell lines/values.
                </li>
                <li className="list-group-item">
                  Heatmap columns now support complex color and value mapping.
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved column types</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Chromosomes are now correctly sorted.
                </li>
                <li className="list-group-item">
                  Gene start and end coordinates are now numeric columns allowing correct sorting (can for instance be used to draw copy number profiles).
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved user interface</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  "Add column" menu simplified
                </li>
                <li className="list-group-item">
                  Some features renamed to make it clearer what they do.
                </li>
                <li className="list-group-item">
                  A "Submit Feedback" button was added: By clicking on the button in the upper right corner (the life belt icon), you can easily provide feedback about Ordino (bug reports, features requests, etc).
                </li>
              </ul>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Improved performance</div>
              <div className="card-body">
                <p className="card-text">The overview mode (last button on the right panel) is now faster and works even with a larger number of columns.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card shadow-sm">
              <div className="h6 card-header">Briefly noted</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  A few external detail views have been added.
                </li>
                <li className="list-group-item">
                  Extended "Data download" functionality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
];



export function NewsPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>
      <div className="scrollspy-nav flex-column ml-4 nav">
        {sections.map(({name}, i) => (
          <Link className="nav-link" role="button" key={i} to={`element-${i}`} spy={true} smooth={true} offset={-180} duration={500}>
            {name}
          </Link>
        ))}
      </div>
      <div className="container news-page my-9">
        {sections.map(({name, markup}, i) => (
          <Element key={i} name={`element-${i}`} className="news-page-section">
            <h4 className="text-left mt-2 d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right"></i> {name}</h4>
            {markup()}
          </Element>
        ))}
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
