import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
import { Row, Col, Card, Container } from 'react-bootstrap';
export function DatasetCard({ title, text }) {
    return (React.createElement(Card, { style: { height: '100%' }, className: "shadow-sm" },
        React.createElement(Card.Body, null,
            React.createElement(Card.Title, null, title),
            React.createElement(Card.Text, null, text))));
}
export function DatasetsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement(Container, { className: "my-4 dataset-page" },
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement("h4", { className: "text-left d-flex align-items-center mt-2 mb-3" },
                        React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                        " Basic Datasets"))),
            React.createElement(Row, { xs: 1, md: 2 },
                React.createElement(Col, null,
                    React.createElement(DatasetCard, { title: "The Cancer Genome Atlas (TCGA)", text: `Gene expression, mutation, and copy number data cancergenome.nih.gov` })),
                React.createElement(Col, null,
                    React.createElement(DatasetCard, { title: "Cancer Cell Line Encyclopedia (CCLE)", text: "Gene expression, mutation, and copy number data\n            portals.broadinstitute.org/ccle" }))),
            React.createElement(Row, { className: "mt-4" },
                React.createElement(Col, null,
                    React.createElement("h4", { className: "text-left d-flex align-items-center mt-2 mb-3" },
                        React.createElement("i", { className: "mr-2 fas ordino-icon-1 fa-chevron-circle-right" }),
                        " Depletion sceen data"))),
            React.createElement(Row, { xs: 1, md: 2 },
                React.createElement(Col, null,
                    React.createElement(DatasetCard, { title: "Project DRIVE", text: "RNAi depletion screen data (RSA and ATARiS)\n            McDonald III, E. R. et. al. Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening.\n             Cell 170, Pages 577-592.e10 (2017)." })),
                React.createElement(Col, null,
                    React.createElement(DatasetCard, { title: "Avana CERES", text: "CRISPR-Cas9 depletion screen data\n            Meyers, R. M. et. al. Computational correction of copy\n             number effect improves specificity of CRISPR\u2013Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779\u20131784 (2017)." })))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=DatasetsPage.js.map