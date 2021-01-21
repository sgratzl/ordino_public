import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {Row, Col, Nav, ListGroup, Navbar} from 'react-bootstrap';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';


interface IReleaseNotekProps {
    headerText: string;
    children?: React.ReactNode;
}

export function ReleaseNoteScard({headerText, children}: IReleaseNotekProps) {
    return (
        <div className="col mb-4">
            <h4 className="text-left mt-2 mb-3"><i className="mr-2 fas fa-chevron-circle-right"></i> {headerText}</h4>
            <Card className="shadow-sm h-100">
                <Card.Body>
                    <Row className="align-items-top">
                        <Col sm={7}>
                            {children}
                        </Col>
                        <Col >
                            <Card.Img src={cardImage} className='img-fit' alt="Card image" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}
