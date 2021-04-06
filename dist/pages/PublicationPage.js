import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { Row, Card, Container } from 'react-bootstrap';
export function PublicationPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement(Container, { className: "ordino-publication-page my-9" },
            React.createElement(Row, { className: "mt-4" },
                React.createElement("h4", { className: "text-left d-flex align-items-center mb-3" },
                    React.createElement("i", { className: "mr-2 ordino-icon-2  fas fa-book-open" }),
                    " Publication")),
            React.createElement(Row, { className: "mb-4" },
                React.createElement(Card, { style: { overflow: 'hidden' }, className: "shadow-sm" },
                    React.createElement("iframe", { className: "", width: "100%", height: "100%", src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }),
                    React.createElement(Card.Body, null,
                        React.createElement(Card.Text, null, "Ordino is a web-based analysis tool for cancer genomics that allows users to flexibly rank, filter and explore genes, cell lines and tissue samples based on pre-loaded data, including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia and manually uploaded information. Interactive tabular data visualization that facilitates the user-driven prioritization process forms a core component of Ordino. Detail views of selected items complement the exploration. Findings can be stored, shared and reproduced via the integrated session management."),
                        React.createElement(Card.Text, null, "Ordino was published in the Oxford Bioinformatics journal. Please consider a citation when using Ordino and publishing your results."),
                        React.createElement(Card.Text, { className: "text-muted" },
                            "Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger",
                            React.createElement("br", null),
                            "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples",
                            React.createElement("br", null),
                            "Bioinformatics, 35(17): 3140-3142, 2019.")),
                    React.createElement(Card.Footer, null,
                        React.createElement("a", { href: "https://dx.doi.org/10.1093/bioinformatics/btz009", target: "_blank", rel: "noopener noreferrer", className: "btn btn-light" },
                            React.createElement("i", { className: "mr-1 fas fa-angle-right" }),
                            " Read the publication"))))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=PublicationPage.js.map