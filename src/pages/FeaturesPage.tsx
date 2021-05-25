import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {FeatureCard} from './components/FeatureCard';

export function FeaturesPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>

      <div className="my-9 container">
        <div className="row">
          <div className="col position-relative">
            <h4 className="text-start d-flex align-items-center mb-3"><i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Define List of Items</h4>
          </div>
        </div>
        <div className="row">
          <div className="col position-relative">
            <p className="lead text-ordino-gray-4">
              The user starts the analysis by defining a set of items. The item set can be determined by manually entering a list of identifiers
              (e.g., a list of gene symbols), by selecting a previously saved or predefined
               list of items, or by uploading a comma-separated file.</p>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col position-relative">
            <h4 className="text-start d-flex align-items-center mb-3"><i className="me-2 ordino-icon-1 fas fa-chevron-circle-right"></i> Rank, Filter, and Select Items</h4>
          </div>
        </div>
        <div className="row">
          <div className="col position-relative">
            <p className="lead text-ordino-gray-4">
              A core component of the Ordino system is the interactive visualization technique <a href="http://lineup.js.org" target="_blank" rel="noopener noreferrer">LineUp</a>,
              which allows users to flexibly create and explore rankings of items based
              on a set of heterogeneous attributes. The exploration is supplemented with filtering features, such as
              setting cutoff values for numerical attributes, specifying a string or regular expression for textual
              columns, and specifying one or more categories in categorical attributes. In addition, users can change
              the visual representation of columns on demand. Numerical attributes, for instance, can be visualized
              using bars, varying brightness, or as circles whose sizes are proportional to the data values.</p>
            <p className="lead text-ordino-gray-4">
              As a starting point, Ordino presents the list of items as a table containing metadata
              attributes specific to the item type. For genes, the default columns are gene symbol, Ensembl ID,
              chromosome, and biotype. For cell lines and tissue samples, the default
              columns are name, tumor type, organ, and gender. Initially, gene lists are
              sorted alphabetically by gene symbol, and lists of cell lines and tissue samples by their name. Further
              columns can be added by clicking on the plus icon shown on the right-hand side of the interface.<br />
              Ordino supports the following column types:
              </p>
          </div>
        </div>
        <div className="row row-cols-md-2">
          <FeatureCard title="Database Columns" >
            <p>Database columns contain metadata about genes (such as biotype, chromosome, Ensembl ID,
            name, sequence region start &#38; end, strand, and gene symbol), cell lines (age at surgery, gender,
            growth type, histology type, metastatic site, morphology, name, organ, and tumor type), and
            tissue samples (age, body mass index (BMI), days to death, days to last follow up, ethnicity,
            gender, height, name, organ, race, tumor type, tumor type adjacent, vendor name, vital status,
            and weight).</p>
          </FeatureCard>
          <FeatureCard title="Single Score Columns" >
            <p>Depending on the item type of the main table, users can add
            single score columns by specifying a single item (gene, cell line, or tissue sample) together with
            the data attribute of interest (e.g., expression, copy number, or mutation). The following single
            scores are available:</p>
            <ul>
              <li>For <b>genes</b>: single tissue-sample score, single cell-line score, and single depletion-screen
            score.</li>
              <li>For <b>cell lines</b>: single gene score and single depletion-screen score.</li>
              <li>For <b>tissue samples</b>: single gene score.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Aggregated Score Columns">
            <p>In addition to single score columns, the values of which are loaded directly from the the Ordino
            database, users can define aggregations of multiple items that are calculated on the fly by the
            Ordino server. To define an aggregation, users must specify (1) the set of items on whose basis
            the aggregation will be calculated (either by selecting previously stored named sets, by entering
            lists of items, or by selecting categorical attributes, such as the tumor type of cell lines), (2) the
            data type (expression, copy number, mutation, and depletion screen), and (3) the aggregation
            function (average, median, min, max, box plot, frequency, and count).
            The following aggregated scores are available:</p>
            <ul>
              <li>For <b>genes</b>: aggregated tissue-sample score, aggregated cell-line score, and aggregated
              depletion-screen score.</li>
              <li>For <b>cell lines</b>: aggregated gene score and aggregated depletion-screen score.</li>
              <li>For <b>tissues samples</b>: aggregated gene score.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Combining Columns">
            <p>Combining columns allow users to combine the content of multiple columns by dragging the
            header of single columns onto the combined column header. Users can create weighted sum
            columns, which are visualized as stacked bars highlighting the contribution of individual
            attributes to the total score, min/mean/max combination columns, which show only the
            minimum, mean or maximum of all combined columns, scripted columns, for which users can
            define how individual columns are to be combined using JavaScript, nested columns for
            semantically grouping multiple columns, and imposition columns, which color numerical
            columns by a categorical attribute.</p>
          </FeatureCard>
          <FeatureCard title="Uploaded Columns">
            <p>Uploaded columns allow users to fuse external data to the currently shown table. The data can
            be loaded from a comma-separated file in which the first column contains the unique identifier
            of the primary identifier in the table, followed by one or multiple columns holding the data to be
            integrated. The system automatically detects common annotations, such as gene symbols and
            Ensembl IDs.</p>
          </FeatureCard>
        </div>
        <div className="row mt-6">
          <div className="col position-relative">
            <h4 className="text-start d-flex align-items-center mb-3"><i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Obtain Detailed Information</h4>
          </div>
        </div>
        <div className="row">
          <div className="col position-relative">
            <p className="lead text-ordino-gray-4">
              Users can select one or more items in a ranking table for exploration using a collection of detail views.
              The detail views offered to the user depend on the type of items selected. The publicly deployed version
              of Ordino includes the following detail views:
          </p>
          </div>
        </div>
        <div className="row row-cols-md-2">
          <FeatureCard title="Database Info View" >
            <p>Database Info view for showing metadata stored in the database for all selected items. The
            information is represented as a table containing a row for each database attribute and a column
            for each selected item.</p>
          </FeatureCard>
          <FeatureCard title="Expression View, Copy Number View and Mutation View" >
            <p>Expression view, Copy Number view, and Mutation view visualizing experimental data for the
            currently selected items with the ranking visualization technique <a href="http://lineup.js.org" target="_blank" rel="noopener noreferrer">LineUp</a>.</p>
          </FeatureCard>
          <FeatureCard title="Combined View" >
            <p>Combined view is a specialized ranking view that is able to show copy number, expression, and
            mutation data in combination.</p>
          </FeatureCard>
          <FeatureCard title="Expression vs. Copy Number View" >
            <p>Expression vs. Copy Number view showing a scatterplot for each selected gene with copy
            number mapped to the x-axis and expression to the y-axis.
            The analyst can determine via a drop-down list whether the scatterplot shows cell lines or tissue
            samples. Dots in the plots can be colored by preloaded categorical attributes, such as tumor
            type, gender and organ.</p>
          </FeatureCard>
          <FeatureCard title="Co-Expression View" >
            <p>Co-Expression view for comparing the expression of multiple selected genes. If multiple genes
            are selected, one plot is shown for each combination. Analogously to the Expression vs. Copy
            Number view, the dots represent either cell lines or tissue samples and can be colored by
            categorical attributes.</p>
          </FeatureCard>
          <FeatureCard title="OncoPrint View" >
            <p>OncoPrint view showing a horizontal series of colored blocks (glyphs) for each gene selected.
            Depending on the chosen data subset, each block represents a cell line or tissue sample. The
            background color of the blocks indicates the copy number status (pink=amplification, blue=deep
            deletion, gray=normal, white=unknown), while the small block contained visualizes the mutation
            status (green=mutated, gray=non mutated, white=unknown) of a cell line or tissue sample.</p>
          </FeatureCard>
          <FeatureCard title="External Resource Views" >
            <p>External resource views loading the content of external websites. For selected genes, the user
            can look at the information available on <a href="https://ensembl.org/" target="_blank" rel="noopener noreferrer">Ensembl</a>, <a href="https://proteinatlas.org/" target="_blank" rel="noopener noreferrer">Human Protein Atlas</a>, <a href="https://www.targetvalidation.org/" target="_blank" rel="noopener noreferrer">Open Targets</a>, <a href="https://www.ncbi.nlm.nih.gov/pubmed" target="_blank" rel="noopener noreferrer">PubMed</a>, and <a href="https://www.ncbi.nlm.nih.gov/pubmed" target="_blank" rel="noopener noreferrer">UniProt</a>.
            For cell lines, the analyst can load the information available on <a href="https://cancer.sanger.ac.uk/cosmic/" target="_blank" rel="noopener noreferrer">COSMIC</a> (Catalogue Of Somatic Mutations In Cancer).</p>
          </FeatureCard>
        </div>
      </div>

      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
