import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';
export function ReleaseNoteScard({ headerText, children }) {
    return (React.createElement("div", { className: "col mb-4" },
        React.createElement("h4", { className: "text-left mt-2 mb-3" },
            React.createElement("i", { className: "mr-2 fas fa-chevron-circle-right" }),
            " ",
            headerText),
        React.createElement(Card, { className: "shadow-sm h-100" },
            React.createElement(Card.Body, null,
                React.createElement(Row, { className: "align-items-top" },
                    React.createElement(Col, { sm: 7 }, children),
                    React.createElement(Col, null,
                        React.createElement(Card.Img, { src: cardImage, className: 'img-fit', alt: "Card image" })))))));
}
//# sourceMappingURL=ReleaseNotesCard.js.map