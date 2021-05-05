import * as React from 'react';
import {Col, Form, Card, Button} from 'react-bootstrap';

const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';

export function OrdinoContactForm() {
    const handleSubmit = React.useCallback((event: React.SyntheticEvent) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const subject = data.get('subject').toString();
        const message = data.get('message').toString();
        let parameters = subject || message ? '?' : '';
        if (subject) {
            parameters += `subject=${encodeURIComponent(subject)}`;
        }
        if (message) {
            parameters += `${subject ? '&' : ''}body=${encodeURIComponent(message)}`;
        }
        form.reset();
        window.location.href = 'mailto:' + CONTACT_FORM_EMAIL + parameters;
    }, []);

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Text>
                    {'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to '}
                    <Card.Link href="mailto:ordino@caleydo.org.">ordino@caleydo.org</Card.Link>. We are glad to help you.
                 </Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="row-cols-md-3">
                        <Form.Label>Type of contact</Form.Label>
                        <Form.Control name="subject" as="select">
                            <option >I have some general feedback</option>
                            <option>I have a question</option>
                            <option >I want to report a bug</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={5}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Row className="justify-content-end">
                        <Col md={'auto'}>
                            < Button title="Send Message" type="submit" variant="secondary" >
                                Send Message
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card >
    );
}
