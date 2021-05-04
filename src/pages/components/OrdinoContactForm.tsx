import * as React from 'react';
import {Col, Form, Card} from 'react-bootstrap';

interface IOrdinoContactFormState {
    name: string;
    email?: string;
    subject: string;
    message: string;
    mailTo: string;
}

const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';

const useSubmitContactForm = () => {
    const [inputs, setInputs] = React.useState<IOrdinoContactFormState>({
        name: '',
        subject: 'I have a question',
        message: '',
        email: '',
        mailTo: 'mailto:' + CONTACT_FORM_EMAIL,
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // persist event in order to access `event.target.name`
        event.persist();
        const {subject, message, name, email} = inputs;
        let extra = subject || message ? '?' : '';
        if (subject) {
            extra += `subject=${encodeURIComponent(subject)}`;
        }
        if (message) {
            // append name and email to the email body
            // maybe it would be less confusing to completely remove these two fields and the user can add them directly to the message box
            const body = `${message}${name ? '\n Name: ' + name : ''}${email ? '\n Email: ' + email : ''}`;
            extra += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
        }
        const newMailTo = 'mailto:' + CONTACT_FORM_EMAIL + extra;
        setInputs((inputs) => ({...inputs, [event.target.name]: event.target.value, mailTo: newMailTo}));
    };
    return {
        inputs,
        handleInputChange,
    };
};

export function OrdinoContactForm() {

    const {inputs, handleInputChange} = useSubmitContactForm();
    const {name, email, subject, message, mailTo} = inputs;

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Text>
                    {'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to '}
                    <Card.Link href="mailto:ordino@caleydo.org.">ordino@caleydo.org</Card.Link>. We are glad to help you.
                 </Card.Text>
                <Form>
                    <Form.Group className="row-cols-md-3">
                        <Form.Label>Type of contact</Form.Label>
                        <Form.Control onChange={handleInputChange} value={subject} name="subject" as="select">
                            <option value="I have a question">I have a question</option>
                            <option value="I want to report a bug">I want to report a bug</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" value={message} rows={5} onChange={handleInputChange}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={handleInputChange} name="name" type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder="name@example.com" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Row className="justify-content-end">
                        <Col md={'auto'}>
                            <a href={mailTo} title="Send Message" className="btn btn-secondary">
                                Send Message
                            </a>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

