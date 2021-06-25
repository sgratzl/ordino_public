import * as React from 'react';
import { Link } from 'react-router-dom';
export function OrdinoTeaserCards() {
    return (React.createElement("div", { className: "ordino-teaser-cards container" },
        React.createElement("div", { className: "row row-cols-1 row-cols-md-2 my-5" },
            React.createElement("div", { className: "col mb-4" },
                React.createElement("h4", { className: "text-center mb-3" },
                    React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-newspaper" }),
                    " What's new?"),
                React.createElement("div", { className: "card shadow-sm h-100" },
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "card-text" }, "With Ordino v9.0 we have launched a whole new homepage, start menu, and various usability improvements."),
                        React.createElement("p", { className: "card-text" },
                            "The new homepage welcomes new and recurring users and provides an overview of the Ordino ",
                            React.createElement(Link, { to: "/features" }, "features"),
                            ", ",
                            React.createElement(Link, { to: "/datasets" }, "loaded datasets"),
                            ", and ",
                            React.createElement(Link, { to: "/publications" }, "publications"),
                            "."),
                        React.createElement("p", { className: "card-text" }, "In addition to the new homepage we designed an entirely new Ordino start menu which provides quick access to datasets, sessions and tours.")),
                    React.createElement("div", { className: "card-footer" },
                        React.createElement(Link, { to: "/news", className: "btn btn-light" },
                            React.createElement("i", { className: "mr-1 fas fa-angle-right" }),
                            " Read the release notes"))))),
        React.createElement("div", { className: "col mb-4" },
            React.createElement("h4", { className: "text-center mb-3" },
                React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-book-open" }),
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
                        React.createElement("i", { className: "mr-1 fas fa-angle-right" }),
                        " List of all publications"))))));
    div >
    ;
    ;
}
//# sourceMappingURL=OrdinoTeaserCards.js.map