import * as React from 'react';
import {Col, Form, Button, Card} from 'react-bootstrap';

export function OrdinoContactForm () {
    // TODO implemment backend
    const handleSubmit = () => null;

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Text>
                    {'Do you have questions or found a bug, do not hasitate to contact us using the contact form below. You can also contact us by writing an email to '}
                    <Card.Link href="mailto:ordino@caleydo.org.">ordino@caleydo.org</Card.Link> or posting a message in the Microsoft Team. We are glad to help you.
                 </Card.Text>
                <Form onSubmit={() => handleSubmit()}>
                    <Form.Group className="row-cols-md-3">
                        <Form.Label>Type of contact</Form.Label>
                        <Form.Control as="select">
                            <option>I have a question</option>
                            <option>I want to report a bug</option>
                            <option>Placeholder</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Row className="justify-content-end">
                        <Col md={'auto'}>
                            <Button variant="secondary" type="submit">
                                Send Message
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

