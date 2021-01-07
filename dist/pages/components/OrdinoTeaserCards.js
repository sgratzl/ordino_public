import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export function OrdinoTeaserCards() {
    return (React.createElement("div", { className: "ordino-teaser-cards container" },
        React.createElement("div", { className: "row row-cols-1 row-cols-md-2 my-5" },
            React.createElement("div", { className: "col mb-4" },
                React.createElement("h4", { className: "text-center mb-3" },
                    React.createElement("i", { className: "mr-2 fas fa-newspaper" }),
                    " What's new?"),
                React.createElement(Card, { className: "shadow-sm h-100" },
                    React.createElement(Card.Body, null,
                        React.createElement(Card.Text, null, "With Ordino v7.0.0 we have improved the usability of ranking views. The new ranking side panel supports the statistical analysis of rankings."),
                        React.createElement(Card.Text, null, "Ordino is now using the hg38 database and provides new scores for HLA Type, MSI Status, and Mutational Burden for cell lines and tissues samples. Furthermore the PRISM drug screen can be added as cell line score.")),
                    React.createElement(Card.Footer, null,
                        React.createElement(Link, { to: "/news", className: "btn btn-light" },
                            React.createElement("i", { className: "mr-1 fas fa-angle-right" }),
                            " Read the changelog")))),
            React.createElement("div", { className: "col mb-4" },
                React.createElement("h4", { className: "text-center mb-3" },
                    React.createElement("i", { className: "mr-2 fas fa-book-open" }),
                    " Publication"),
                React.createElement(Card, { className: "shadow-sm h-100" },
                    React.createElement(Card.Body, null,
                        React.createElement(Card.Text, null, "Ordino was published in the Oxford Bioinformatics journal. Please consider a citation when using Ordino and publishing your results."),
                        React.createElement(Card.Text, { className: "text-muted" },
                            "Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger",
                            React.createElement("br", null),
                            "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples",
                            React.createElement("br", null),
                            "Bioinformatics, 35(17): 3140-3142, 2019.")),
                    React.createElement(Card.Footer, null,
                        React.createElement(Link, { to: "/publication", className: "btn btn-light" },
                            React.createElement("i", { className: "mr-1 fas fa-angle-right" }),
                            " Read the publication")))))));
}
//# sourceMappingURL=OrdinoTeaserCards.js.map