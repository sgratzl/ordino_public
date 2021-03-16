import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Card, Container} from 'react-bootstrap';



interface IDatasetPageCardProps {
  title: string;
  children?: React.ReactNode;
}


export function DatasetPageCard({title, children}: IDatasetPageCardProps) {
  return (
    <Card style={{height: '100%'}} className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  );
}


export function DatasetsPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>
      <Container className="dataset-page my-9">
        <Row>
          <Col>
            <h4 className="text-left d-flex align-items-center mt-2 mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Basic Datasets</h4>
          </Col>
        </Row>
        <Row xs={1} md={2} >
          <Col>
            <DatasetPageCard title="The Cancer Genome Atlas (TCGA)">
              <Card.Text>Gene expression, mutation, and copy number data </Card.Text>
              <Card.Link href="https://cancergenome.nih.gov" target="_blank" rel="noopener">cancergenome.nih.gov</Card.Link>
            </DatasetPageCard>
          </Col>
          <Col>
            <DatasetPageCard title="Cancer Cell Line Encyclopedia (CCLE)">
              <Card.Text>Gene expression, mutation, and copy number data</Card.Text>
              <Card.Link href="https://portals.broadinstitute.org/ccle" target="_blank" rel="noopener">portals.broadinstitute.org/ccle</Card.Link>
            </DatasetPageCard>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4 className="text-left d-flex align-items-center mt-2 mb-3"><i className="mr-2 fas ordino-icon-1 fa-chevron-circle-right" ></i> Depletion Sceen Data</h4>
          </Col>
        </Row>
        <Row xs={1} md={2} >
          <Col>
            <DatasetPageCard title="Project DRIVE">

              <Card.Text>RNAi depletion screen data (RSA and ATARiS)</Card.Text>
              <Card.Link href="https://doi.org/10.1016/j.cell.2017.07.005" target="_blank" rel="noopener"> McDonald III, E. R. et. al.
              Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening.
             Cell 170, Pages 577-592.e10 (2017).</Card.Link>
            </DatasetPageCard>
          </Col>
          <Col>
            <DatasetPageCard title="Avana CERES">
              <Card.Text>CRISPR-Cas9 depletion screen data</Card.Text>
              <Card.Link href="https://doi.org/10.1038/ng.3984" target="_blank" rel="noopener">Meyers, R. M. et. al. Computational correction of copy
             number effect improves specificity of CRISPR–Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779–1784 (2017).</Card.Link>
            </DatasetPageCard>
          </Col>
        </Row>
      </Container>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}