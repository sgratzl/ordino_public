import * as React from 'react';
import { Col, Form, Card } from 'react-bootstrap';
const CONTACT_FORM_EMAIL = 'ordino@caleydo.org';
const useSubmitContactForm = () => {
    const [inputs, setInputs] = React.useState({
        name: '',
        subject: 'I have a question',
        message: '',
        email: '',
        mailTo: 'mailto:' + CONTACT_FORM_EMAIL,
    });
    const handleInputChange = (event) => {
        // persist event in order to access `event.target.name`
        event.persist();
        const { subject, message, name, email } = inputs;
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
        setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value, mailTo: newMailTo }));
    };
    return {
        inputs,
        handleInputChange,
    };
};
export function OrdinoContactForm() {
    const { inputs, handleInputChange } = useSubmitContactForm();
    const { name, email, subject, message, mailTo } = inputs;
    return (React.createElement(Card, { className: "shadow-sm" },
        React.createElement(Card.Body, null,
            React.createElement(Card.Text, null,
                'Do you have questions or found a bug, do not hesitate to contact us using the contact form below. You can also contact us by writing an email to ',
                React.createElement(Card.Link, { href: "mailto:ordino@caleydo.org." }, "ordino@caleydo.org"),
                ". We are glad to help you."),
            React.createElement(Form, null,
                React.createElement(Form.Group, { className: "row-cols-md-3" },
                    React.createElement(Form.Label, null, "Type of contact"),
                    React.createElement(Form.Control, { onChange: handleInputChange, value: subject, name: "subject", as: "select" },
                        React.createElement("option", { value: "I have a question" }, "I have a question"),
                        React.createElement("option", { value: "I want to report a bug" }, "I want to report a bug"))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Message"),
                    React.createElement(Form.Control, { as: "textarea", name: "message", value: message, rows: 5, onChange: handleInputChange })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Name"),
                    React.createElement(Form.Control, { value: name, onChange: handleInputChange, name: "name", type: "text", placeholder: "Name" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.Label, null, "Email address"),
                    React.createElement(Form.Control, { type: "email", value: email, name: "email", placeholder: "name@example.com", onChange: handleInputChange })),
                React.createElement(Form.Row, { className: "justify-content-end" },
                    React.createElement(Col, { md: 'auto' },
                        React.createElement("a", { href: mailTo, title: "Send Message", className: "btn btn-secondary" }, "Send Message")))))));
}
//# sourceMappingURL=OrdinoContactForm.js.map