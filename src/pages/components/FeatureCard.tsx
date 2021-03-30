import * as React from 'react';
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';

interface IFeatureCardProps {
    image?: string;
    title: string;
    /**
     * Add card text as children
     */
    children?: React.ReactNode;
}

export function FeatureCard({image, title, children}: IFeatureCardProps) {
    return (
        <Col className="mb-4">
            <Card  className="shadow-sm h-100">
                <Card.Body className="p-2">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
