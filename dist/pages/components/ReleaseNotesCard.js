import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';
export function ReleaseNoteScard({ headerText, children }) {
    return (React.createElement(Card, { className: "shadow-sm p-3 h-100" },
        React.createElement(Card.Body, null,
            React.createElement(Row, { xs: 1, className: "align-items-top" },
                React.createElement(Col, { sm: 7 }, children),
                React.createElement(Col, null,
                    React.createElement(Card.Img, { src: cardImage, className: 'img-fit', alt: "Card image" }))))));
}
//# sourceMappingURL=ReleaseNotesCard.js.map