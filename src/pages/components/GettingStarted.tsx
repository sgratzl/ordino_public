import * as React from 'react';
import Button from 'react-bootstrap/Button';

export function GettingStarted() {
  return (
    <section className="container ordino-getting-started py-5">
      <div className="row">
        <div className="col text-center">
          <h1>Getting started with Ordino</h1>
        </div>
      </div>
      <ol className="row ordino-getting-started-steps mx-0 mt-5 p-0">
        <li className="col-12 col-lg mb-sm-5 mb-lg-0 text-center">
          <h2 className="my-3">Define list of entities</h2>
          <p>Select the genes, cell lines, or tissue samples from our predefined dataset or upload your own dataset of interest.</p>
        </li>
        <li className="col-12 col-lg mb-sm-5 mb-lg-0 text-center">
          <h2 className="my-3">Rank, filter and select entities</h2>
          <p>Rank and filter the entities by different attributes. Add more data on demand. Select most interesting entities.</p>
        </li>
        <li className="col-12 col-lg mb-sm-5 mb-lg-0 text-center">
          <h2 className="my-3">Obtain detailed information</h2>
          <p>Dive deeper into the selected entities and obtain further information or visualize selected entities.</p>
        </li>
      </ol>
      <div className="row">
        <div className="col text-center">
          <Button href="/app/" variant="outline-secondary" size="lg">Start Analysis</Button>
        </div>
      </div>
    </section>
  );
}
