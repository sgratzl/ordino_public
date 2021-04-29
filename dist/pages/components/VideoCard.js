import * as React from 'react';
import { Card } from 'react-bootstrap';
import { DualLink } from './DualLink';
export function VideoCard({ openInNewWindow }) {
    return (React.createElement(Card, { style: { overflow: 'hidden' }, className: "shadow-sm" },
        React.createElement("iframe", { src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }),
        React.createElement(Card.Body, null,
            React.createElement(Card.Text, null, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-check" }),
                "Features"),
            React.createElement(Card.Text, null,
                "You can find an overview of the main features",
                React.createElement(DualLink, { component: Card.Link, openInNewWindow: openInNewWindow, to: "/features" }, "\u00A0here.")),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-database" }),
                "Datasets"),
            React.createElement(Card.Text, null,
                "Many datasets have been integrated and are ready to explore.",
                React.createElement(DualLink, { component: Card.Link, to: "/datasets" }, "\u00A0Read more about datasets.")),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-mouse-pointer" }),
                "Tours"),
            React.createElement(Card.Text, null,
                "Another good way to learn about the main features of Ordino are our interactive tours that you can find",
                React.createElement(DualLink, { component: Card.Link, openInNewWindow: openInNewWindow, to: "/tours" }, "\u00A0here.")),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-book-open" }),
                "Publications"),
            React.createElement(Card.Text, null,
                "Ordino and its components have been described in several scientific publications.",
                React.createElement(DualLink, { component: Card.Link, openInNewWindow: openInNewWindow, to: "/publication" }, "\u00A0More about the publications.")))));
}
//# sourceMappingURL=VideoCard.js.map