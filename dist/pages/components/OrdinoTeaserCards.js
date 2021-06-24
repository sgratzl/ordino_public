import * as React from 'react';
import { Link } from 'react-router-dom';
export function OrdinoTeaserCards() {
    return (React.createElement("div", { className: "ordino-teaser-cards container" },
        React.createElement("div", { className: "row row-cols-1 row-cols-md-2 my-5" },
            React.createElement("div", { className: "col position-relative mb-4" },
                React.createElement("h4", { className: "text-center mb-3" },
                    React.createElement("i", { className: "me-2 ordino-icon-2 fas fa-newspaper" }),
                    " What's new?"),
                React.createElement("div", { className: "card shadow-sm h-100" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "card-text" }, "With Ordino v7.0.0 we have improved the usability of ranking views. The new ranking side panel supports the statistical analysis of rankings."),
                        React.createElement("p", { className: "card-text" }, "Ordino is now using the hg38 database and provides new scores for HLA Type, MSI Status, and Mutational Burden for cell lines and tissues samples. Furthermore the PRISM drug screen can be added as cell line score.")),
                    React.createElement("div", { className: "card-footer" },
                        React.createElement(Link, { to: "/news", className: "btn btn-light" },
                            React.createElement("i", { className: "me-1 fas fa-angle-right" }),
                            " Read the changelog")))),
            React.createElement("div", { className: "col position-relative mb-4" },
                React.createElement("h4", { className: "text-center mb-3" },
                    React.createElement("i", { className: "me-2 ordino-icon-2 fas fa-book-open" }),
                    " Publication"),
                React.createElement("div", { className: "card shadow-sm h-100" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "card-text" }, "Ordino and its components have been published in multiple scientific articles. Please cite the following article when using Ordino and publishing your results."),
                        React.createElement("p", { className: "card-text text-muted" },
                            "Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger.",
                            React.createElement("br", null),
                            React.createElement("b", null, "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples."),
                            React.createElement("br", null),
                            React.createElement("i", null, " Bioinformatics, 35(17): 3140-3142, 2019."))),
                    React.createElement("div", { className: "card-footer" },
                        React.createElement(Link, { to: "/publication", className: "btn btn-light" },
                            React.createElement("i", { className: "me-1 fas fa-angle-right" }),
                            " List of all publications")))))));
}
//# sourceMappingURL=OrdinoTeaserCards.js.map