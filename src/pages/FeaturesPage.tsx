import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {Row, Col, Card, Container} from 'react-bootstrap';
import {FeatureCard} from './components/FeatureCard';
import feature1Img from 'ordino_public/dist/assets/feature_1.png';
import feature2Img from 'ordino_public/dist/assets/feature_2.png';
import feature3Img from 'ordino_public/dist/assets/feature_3.png';
import feature4Img from 'ordino_public/dist/assets/feature_4.png';

export function FeaturesPage() {
  return (
    <>
      <HeaderNavigation fixed="top"></HeaderNavigation>
      <Container className="my-9">
        <Row>
          <Col>
            <h4 className="text-left d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right" ></i> Feature Set 1</h4>
          </Col>
        </Row>
        <Row md={3}>
          <FeatureCard title="Feature 1" text="Ordino is a web-based analysis tool for cancer genomics" image={feature1Img} />
          <FeatureCard title="Feature 2" text="Ordino allows users to flexibly rank, filter and explore" image={feature2Img} />
          <FeatureCard title="Feature 3" text="Pre-loaded data, including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia" image={feature3Img} />
        </Row>
        <Row>
          <Col>
            <h4 className="text-left d-flex align-items-center mt-6 mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right"></i> Feature Set 2</h4>
          </Col>
        </Row>
        <Row md={1}>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Row className="align-items-top">
                  <Col>
                    <Card.Img src={feature4Img} alt="Card image" />
                  </Col>
                  <Col >
                    <Card.Title>Ordino Ranking</Card.Title>
                    <Card.Text>
                      Interactive tabular data visualization that facilitates the user-driven prioritization process forms a core component of Ordino.
                      Detail views of selected items complement the exploration. Findings can be stored, shared and reproduced via the integrated session management.
                  </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
