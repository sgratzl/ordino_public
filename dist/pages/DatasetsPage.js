import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
import { Row, Col, Card, Container } from 'react-bootstrap';
export function DatasetsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement(Container, { fluid: "md" },
            React.createElement(Row, { className: "mt-4" },
                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                    React.createElement("i", { className: "mr-2 fas fa-chevron-circle-right" }),
                    " Basic Datasets")),
            React.createElement(Row, { className: "align-items-stretch" },
                React.createElement(Col, null,
                    React.createElement(SimpleCard, { title: "The Cancer Genome Atlas (TCGA)", text: `Gene expression, mutation, and copy number data cancergenome.nih.gov` })),
                React.createElement(Col, null,
                    React.createElement(SimpleCard, { title: "Cancer Cell Line Encyclopedia (CCLE)", text: "Gene expression, mutation, and copy number data\n            portals.broadinstitute.org/ccle" }))),
            React.createElement(Row, { className: "mt-4" },
                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                    React.createElement("i", { className: "mr-2 fas fa-chevron-circle-right" }),
                    " Depletion sceen data")),
            React.createElement(Row, { md: 2 },
                React.createElement(Col, null,
                    React.createElement(SimpleCard, { title: "Project DRIVE\n", text: "RNAi depletion screen data (RSA and ATARiS)\n            McDonald III, E. R. et. al. Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening.\n             Cell 170, Pages 577-592.e10 (2017)." })),
                React.createElement(Col, null,
                    React.createElement(SimpleCard, { title: "Avana CERES", text: "CRISPR-Cas9 depletion screen data\n            Meyers, R. M. et. al. Computational correction of copy\n             number effect improves specificity of CRISPR\u2013Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779\u20131784 (2017)." })))),
        React.createElement(OrdinoFooter, null)));
}
export const SimpleCard = ({ title, text }) => {
    return (React.createElement(Card, { style: { height: "100%" }, className: "shadow-sm" },
        React.createElement(Card.Body, null,
            React.createElement(Card.Title, null, title),
            React.createElement(Card.Text, null, text))));
};
//# sourceMappingURL=DatasetsPage.js.map