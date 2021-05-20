import * as React from 'react';
import { Link } from 'react-router-dom';
export function VideoCard({ openInNewWindow }) {
    const newWindowProps = openInNewWindow ? {
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {};
    return (React.createElement("div", { style: { overflow: 'hidden' }, className: "shadow-sm card" },
        React.createElement("iframe", { src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }),
        React.createElement("div", { className: "card-body" },
            React.createElement("p", { className: "card-text" }, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."),
            React.createElement("h5", { className: "card-title" },
                React.createElement("i", { className: "me-2 fas fa-check" }),
                "Features"),
            React.createElement("p", { className: "card-text" },
                "You can find an overview of the main features",
                React.createElement(Link, Object.assign({}, newWindowProps, { className: "card-link", to: "/features" }), "\u00A0here.")),
            React.createElement("h5", { className: "card-title" },
                React.createElement("i", { className: "me-2 fas fa-database" }),
                "Datasets"),
            React.createElement("p", { className: "card-text" },
                "Many datasets have been integrated and are ready to explore.",
                React.createElement(Link, Object.assign({}, newWindowProps, { className: "card-link", to: "/datasets" }), "\u00A0Read more about datasets.")),
            React.createElement("h5", { className: "card-title" },
                React.createElement("i", { className: "me-2 fas fa-mouse-pointer" }),
                "Tours"),
            React.createElement("p", { className: "card-text" },
                "Another good way to learn about the main features of Ordino are our interactive tours that you can find",
                React.createElement(Link, Object.assign({}, newWindowProps, { className: "card-link", to: "/tours" }), "\u00A0here.")),
            React.createElement("h5", { className: "card-title" },
                React.createElement("i", { className: "me-2 fas fa-book-open" }),
                "Publications"),
            React.createElement("p", { className: "card-text" },
                "Ordino and its components have been described in several scientific publications.",
                React.createElement(Link, Object.assign({}, newWindowProps, { className: "card-link", to: "/publication" }), "\u00A0More about the publications.")))));
}
//# sourceMappingURL=VideoCard.js.map