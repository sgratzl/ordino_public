import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {Row, Col, Nav, ListGroup, Navbar} from 'react-bootstrap';

interface IFeatureCardProps {
    image: string;
    title: string;
    text: string;
    children?: React.ReactNode;
}

export function FeatureCard({image, title, text}: IFeatureCardProps) {
    return (
        <div className="col mb-4">
            <Card style={{width: '20rem', height: '20rem'}} className="shadow-sm">
                <Card.Img variant="top" className="p-2" src={image} />
                <Card.Body className="p-2">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
