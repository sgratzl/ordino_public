import * as React from 'react';
export function GettingStarted() {
    return (React.createElement("section", { className: "container ordino-getting-started py-5" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col position-relative text-center" },
                React.createElement("h1", null, "Getting started with Ordino"))),
        React.createElement("ol", { className: "row ordino-getting-started-steps mx-0 mt-5 p-0" },
            React.createElement("li", { className: "col col-lg mb-sm-5 mb-lg-0 text-center" },
                React.createElement("h2", { className: "my-3" }, "Define list of entities"),
                React.createElement("p", null, "Select the genes, cell lines, or tissue samples from our predefined dataset or upload your own dataset of interest.")),
            React.createElement("li", { className: "col col-lg mb-sm-5 mb-lg-0 text-center" },
                React.createElement("h2", { className: "my-3" }, "Rank, filter and select entities"),
                React.createElement("p", null, "Rank and filter the entities by different attributes. Add more data on demand. Select most interesting entities.")),
            React.createElement("li", { className: "col col-lg mb-sm-5 mb-lg-0 text-center" },
                React.createElement("h2", { className: "my-3" }, "Obtain detailed information"),
                React.createElement("p", null, "Dive deeper into the selected entities and obtain further information or visualize selected entities."))),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col position-relative text-center" },
                React.createElement("a", { href: "/app/", className: "btn btn-outline-secondary btn-lg" }, "Start Analysis")))));
}
//# sourceMappingURL=GettingStarted.js.map