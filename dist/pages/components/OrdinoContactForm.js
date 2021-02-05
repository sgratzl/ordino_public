import * as React from 'react';
import { Col, Form, Button, Card } from 'react-bootstrap';
export const OrdinoContactForm = () => {
    // TODO implemment backend
    const handleSubmit = () => null;
    return (React.createElement(Card, { className: "shadow-sm" },
        React.createElement(Card.Body, null,
            React.createElement(Card.Text, null,
                "Do you have questions or found a bug, do not hasitate to contact us using the contact form below. You can also contact us by writing an email to ",
                React.createElement(Card.Link, { href: "mailto:ordino@caleydo.org." }, "ordino@caleydo.org"),
                " or posting a message in the Microsoft Team. We are glad to help you."),
            React.createElement(Form, { onSubmit: () => handleSubmit() },
                React.createElement(Form.Group, { className: "row-cols-md-3" },
                    React.createElement(Form.Label, null, "Type of contact"),
                    React.createElement(Form.Control, { as: "select" },
                        React.createElement("option", null, "I have a question"),
                        React.createElement("option", null, "I want to report a bug"),
                        React.createElement("option", null, "Placeholder"))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Message"),
                    React.createElement(Form.Control, { as: "textarea", rows: 5 })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Name"),
                    React.createElement(Form.Control, { type: "text", placeholder: "Name" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Email address"),
                    React.createElement(Form.Control, { type: "email", placeholder: "name@example.com" })),
                React.createElement(Form.Row, { className: "justify-content-end" },
                    React.createElement(Col, { md: "auto" },
                        React.createElement(Button, { variant: "secondary", type: "submit" }, "Send Message")))))));
};
//# sourceMappingURL=OrdinoContactForm.js.map