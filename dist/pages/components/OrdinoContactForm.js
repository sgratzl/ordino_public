import * as React from 'react';
import { Col, Form, Card, Button } from 'react-bootstrap';
const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';
export function OrdinoContactForm() {
    const selectRef = React.useRef(null);
    const textAreaRef = React.useRef(null);
    const formRef = React.useRef(null);
    const mailTo = 'mailto:' + CONTACT_FORM_EMAIL;
    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = selectRef.current.value;
        const message = textAreaRef.current.value;
        let parameters = subject || message ? '?' : '';
        if (subject) {
            parameters += `subject=${encodeURIComponent(subject)}`;
        }
        if (message) {
            parameters += `${subject ? '&' : ''}body=${encodeURIComponent(message)}`;
        }
        formRef.current.reset();
        window.location.href = mailTo + parameters;
    };
    return (React.createElement(Card, { className: "shadow-sm" },
        React.createElement(Card.Body, null,
            React.createElement(Card.Text, null,
                'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to ',
                React.createElement(Card.Link, { href: "mailto:ordino@caleydo.org." }, "ordino@caleydo.org"),
                ". We are glad to help you."),
            React.createElement(Form, { onSubmit: handleSubmit, ref: formRef },
                React.createElement(Form.Group, { className: "row-cols-md-3" },
                    React.createElement(Form.Label, null, "Type of contact"),
                    React.createElement(Form.Control, { ref: selectRef, name: "subject", as: "select" },
                        React.createElement("option", null, "I have some general feedback"),
                        React.createElement("option", null, "I have a question"),
                        React.createElement("option", null, "I want to report a bug"))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Message"),
                    React.createElement(Form.Control, { as: "textarea", name: "message", ref: textAreaRef, rows: 5 })),
                React.createElement(Form.Row, { className: "justify-content-end" },
                    React.createElement(Col, { md: 'auto' },
                        React.createElement(Button, { title: "Send Message", type: "submit", variant: "secondary" }, "Send Message")))))));
}
//# sourceMappingURL=OrdinoContactForm.js.map