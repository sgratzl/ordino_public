import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { Link, Element } from 'react-scroll';
import { VideoCard } from './components/VideoCard';
import { OrdinoContactForm } from './components/OrdinoContactForm';
import { DisclaimerCard } from './components/DisclaimerCard';
export function HelpPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement("div", { className: "scrollspy-nav flex-column ml-4 nav" },
            React.createElement(Link, { className: "nav-link", role: "button", to: `element-${1}`, spy: true, smooth: true, offset: -180, duration: 500 }, "Ordino at a Glance"),
            React.createElement(Link, { className: "nav-link", role: "button", to: `element-${2}`, spy: true, smooth: true, offset: -180, duration: 500 }, "Contact us"),
            React.createElement(Link, { className: "nav-link", role: "button", to: `element-${3}`, spy: true, smooth: true, offset: -180, duration: 500 }, "Disclaimer"),
            React.createElement(Link, { className: "nav-link", role: "button", to: `element-${4}`, spy: true, smooth: true, offset: -200, duration: 500 }, "Terms of Use"),
            React.createElement(Link, { className: "nav-link", role: "button", to: `element-${5}`, spy: true, smooth: true, offset: -230, duration: 500 }, "Source Code")),
        React.createElement("div", { className: "container ordino-help-page mt-9 mb-4" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement(Element, { name: `element-${1}` },
                                React.createElement("h4", { className: "text-left  mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-mountain" }),
                                    " Ordino at a Glance"),
                                React.createElement(VideoCard, null)))),
                    React.createElement("div", { className: "row mt-6" },
                        React.createElement("div", { className: "col" },
                            React.createElement(Element, { name: `element-${2}` },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-at" }),
                                    " Contact us"),
                                React.createElement(OrdinoContactForm, null)))),
                    React.createElement("div", { className: "row mt-6" },
                        React.createElement("div", { className: "col" },
                            React.createElement(Element, { name: `element-${3}` },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-exclamation-triangle " }),
                                    " Disclaimer"),
                                React.createElement(DisclaimerCard, null)))),
                    React.createElement("div", { className: "row mt-6" },
                        React.createElement("div", { className: "col" },
                            React.createElement(Element, { name: `element-${4}` },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 ordino-icon-2 fas fa-smile" }),
                                    " Terms of Use"),
                                React.createElement("div", { className: "card shadow-sm" },
                                    React.createElement("div", { className: "card-body" },
                                        React.createElement("div", { className: "list-group list-group-flush" },
                                            React.createElement("div", { className: "list-group-item" }, "This instance of Ordino is intended for scientific research and non-commercial use only."),
                                            React.createElement("div", { className: "list-group-item" }, "Ordino cannot be used for the provision of medical advice."),
                                            React.createElement("div", { className: "list-group-item" }, "We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice."),
                                            React.createElement("div", { className: "list-group-item" }, "Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes."),
                                            React.createElement("div", { className: "list-group-item" }, "The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties."),
                                            React.createElement("div", { className: "list-group-item" }, "We are not liable to you or third parties claiming through you, for any loss or damage."),
                                            React.createElement("div", { className: "list-group-item" }, "We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties."),
                                            React.createElement("div", { className: "list-group-item" }, "We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site."),
                                            React.createElement("div", { className: "list-group-item" }, "Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided."),
                                            React.createElement("div", { className: "list-group-item" }, "Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked."),
                                            React.createElement("div", { className: "list-group-item" }, "Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise."))))))),
                    React.createElement("div", { className: "row mt-6" },
                        React.createElement("div", { className: "col" },
                            React.createElement(Element, { name: `element-${5}` },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 ordino-icon-2 fab fa-github" }),
                                    " Source Code ",
                                    '&',
                                    " Licenses"),
                                React.createElement("div", { className: "card shadow-sm" },
                                    React.createElement("div", { className: "card-body" },
                                        React.createElement("p", { className: "card-text" }, "The source code of Ordino is available under the Mozilla Public License (MPL) at GitHub."),
                                        React.createElement("p", { className: "card-text" }, "This application is part of Phovea, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the documentation page."),
                                        React.createElement("p", { className: "card-text" }, "Version: 7.0.3-20201119-011617"))))))))),
        React.createElement(DevelopedByAffiliations, null),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=HelpPage.js.map