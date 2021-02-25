import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FeatureCard } from './components/FeatureCard';
import feature1Img from 'ordino_public/dist/assets/feature_1.png';
import feature2Img from 'ordino_public/dist/assets/feature_2.png';
import feature3Img from 'ordino_public/dist/assets/feature_3.png';
import feature4Img from 'ordino_public/dist/assets/feature_4.png';
export function FeaturesPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement(Container, { className: "my-9" },
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement("h4", { className: "text-left d-flex align-items-center mb-3" },
                        React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                        " Feature Set 1"))),
            React.createElement(Row, { md: 3 },
                React.createElement(FeatureCard, { title: "Feature 1", text: "Ordino is a web-based analysis tool for cancer genomics", image: feature1Img }),
                React.createElement(FeatureCard, { title: "Feature 2", text: "Ordino allows users to flexibly rank, filter and explore", image: feature2Img }),
                React.createElement(FeatureCard, { title: "Feature 3", text: "Pre-loaded data, including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia", image: feature3Img })),
            React.createElement(Row, null,
                React.createElement(Col, null,
                    React.createElement("h4", { className: "text-left d-flex align-items-center mt-6 mb-3" },
                        React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                        " Feature Set 2"))),
            React.createElement(Row, { md: 1 },
                React.createElement(Col, { md: 8 },
                    React.createElement(Card, { className: "shadow-sm" },
                        React.createElement(Card.Body, null,
                            React.createElement(Row, { className: "align-items-top" },
                                React.createElement(Col, null,
                                    React.createElement(Card.Img, { src: feature4Img, alt: "Card image" })),
                                React.createElement(Col, null,
                                    React.createElement(Card.Title, null, "Ordino Ranking"),
                                    React.createElement(Card.Text, null, "Interactive tabular data visualization that facilitates the user-driven prioritization process forms a core component of Ordino. Detail views of selected items complement the exploration. Findings can be stored, shared and reproduced via the integrated session management.")))))))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=FeaturesPage.js.map