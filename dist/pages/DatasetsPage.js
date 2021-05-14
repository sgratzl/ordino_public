import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
export function DatasetPageCard({ title, children }) {
    return (React.createElement("div", { style: { height: '100%' }, className: "card shadow-sm" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, title),
            children)));
}
export function DatasetsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement("div", { className: "dataset-page my-9 container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h4", { className: "text-left d-flex align-items-center mt-2 mb-3" },
                        React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                        " Basic Datasets"))),
            React.createElement("div", { className: "row row-cols-md-2 row-cols-1" },
                React.createElement("div", { className: "col" },
                    React.createElement(DatasetPageCard, { title: "The Cancer Genome Atlas (TCGA)" },
                        React.createElement("p", { className: "card-text" }, "Gene expression, mutation, and copy number data "),
                        React.createElement("a", { className: "card-link", href: "https://cancergenome.nih.gov", target: "_blank", rel: "noopener" }, "cancergenome.nih.gov"))),
                React.createElement("div", { className: "col" },
                    React.createElement(DatasetPageCard, { title: "Cancer Cell Line Encyclopedia (CCLE)" },
                        React.createElement("p", { className: "card-text" }, "Gene expression, mutation, and copy number data"),
                        React.createElement("a", { className: "card-link", href: "https://portals.broadinstitute.org/ccle", target: "_blank", rel: "noopener" }, "portals.broadinstitute.org/ccle")))),
            React.createElement("div", { className: "row mt-4" },
                React.createElement("div", { className: "col" },
                    React.createElement("h4", { className: "text-left d-flex align-items-center mt-2 mb-3" },
                        React.createElement("i", { className: "mr-2 fas ordino-icon-1 fa-chevron-circle-right" }),
                        " Depletion Sceen Data"))),
            React.createElement("div", { className: "row row-cols-md-2 row-cols-1" },
                React.createElement("div", { className: "col" },
                    React.createElement(DatasetPageCard, { title: "Project DRIVE" },
                        React.createElement("p", { className: "card-text" }, "RNAi depletion screen data (RSA and ATARiS)"),
                        React.createElement("a", { className: "card-link", href: "https://doi.org/10.1016/j.cell.2017.07.005", target: "_blank", rel: "noopener" }, " McDonald III, E. R. et. al. Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening. Cell 170, Pages 577-592.e10 (2017)."))),
                React.createElement("div", { className: "col" },
                    React.createElement(DatasetPageCard, { title: "Avana CERES" },
                        React.createElement("p", { className: "card-text" }, "CRISPR-Cas9 depletion screen data"),
                        React.createElement("a", { className: "card-link", href: "https://doi.org/10.1038/ng.3984", target: "_blank", rel: "noopener" }, "Meyers, R. M. et. al. Computational correction of copy number effect improves specificity of CRISPR\u2013Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779\u20131784 (2017)."))))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=DatasetsPage.js.map