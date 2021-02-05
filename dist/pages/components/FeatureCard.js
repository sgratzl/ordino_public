import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
export function FeatureCard({ image, title, text }) {
    return (React.createElement(Col, { className: "mb-4" },
        React.createElement(Card, { style: { width: '20rem', height: '20rem' }, className: "shadow-sm" },
            React.createElement(Card.Img, { variant: "top", className: "p-2", src: image }),
            React.createElement(Card.Body, { className: "p-2" },
                React.createElement(Card.Title, null, title),
                React.createElement(Card.Text, null, text)))));
}
//# sourceMappingURL=FeatureCard.js.map