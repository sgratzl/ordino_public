import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
export function FeatureCard({ image, title, children }) {
    return (React.createElement(Col, { className: "mb-4" },
        React.createElement(Card, { className: "shadow-sm h-100" },
            React.createElement(Card.Body, { className: "p-2" },
                React.createElement(Card.Title, null, title),
                React.createElement(Card.Text, null, children)))));
}
//# sourceMappingURL=FeatureCard.js.map