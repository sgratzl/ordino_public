import * as React from 'react';
import {HeaderNavigation} from './components/HeaderNavigation';
import {OrdinoFooter} from './components/OrdinoFooter';
import {Row, Col, Card, Container} from 'react-bootstrap';


export function DatasetCard({title, text}: ICardProps) {
  return (
    <Card style={{height: '100%'}} className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


export function DatasetsPage() {
  return (
    <>
      <HeaderNavigation></HeaderNavigation>
      <Container className="my-4 dataset-page">
        <Row>
          <Col>
            <h4 className="text-left d-flex align-items-center mt-2 mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Basic Datasets</h4>
          </Col>
        </Row>
        <Row xs={1} md={2} >
          <Col>
            <DatasetCard title="The Cancer Genome Atlas (TCGA)"
              text={`Gene expression, mutation, and copy number data cancergenome.nih.gov`} />
          </Col>
          <Col>
            <DatasetCard title="Cancer Cell Line Encyclopedia (CCLE)"
              text="Gene expression, mutation, and copy number data
            portals.broadinstitute.org/ccle" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4 className="text-left d-flex align-items-center mt-2 mb-3"><i className="mr-2 fas ordino-icon-1 fa-chevron-circle-right" ></i> Depletion sceen data</h4>
          </Col>
        </Row>
        <Row xs={1} md={2} >
          <Col>
            <DatasetCard title="Project DRIVE"
              text="RNAi depletion screen data (RSA and ATARiS)
            McDonald III, E. R. et. al. Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening.
             Cell 170, Pages 577-592.e10 (2017)." />
          </Col>
          <Col>
            <DatasetCard title="Avana CERES"
              text="CRISPR-Cas9 depletion screen data
            Meyers, R. M. et. al. Computational correction of copy
             number effect improves specificity of CRISPR–Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779–1784 (2017)." />
          </Col>
        </Row>
      </Container>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}

interface ICardProps {
  title: string;
  text: string;
}
