import React from 'react';
import { DisclaimerCard } from './DisclaimerCard';
import { OrdinoContactForm } from './OrdinoContactForm';
import { VideoCard } from './VideoCard';
import { OrdinoScrollspy, OrdinoScrollspyItem } from 'ordino';
import { UniqueIdManager } from 'phovea_core';
import { SourceCodeCard } from './SourceCodeCard';
import { TermsOfUseCard } from './TermsOfUseCard';
const cards = [
    {
        name: 'Ordino at a Glance',
        icon: 'fas fa-mountain',
        factory: (props) => React.createElement(VideoCard, Object.assign({}, props))
    },
    {
        name: 'Contact us',
        icon: 'fas fa-at',
        factory: () => React.createElement(OrdinoContactForm, null)
    },
    {
        name: 'Disclaimer',
        icon: 'fas fa-exclamation-triangle',
        factory: () => React.createElement(DisclaimerCard, null)
    },
    {
        name: 'Terms of Use',
        icon: 'fas fa-smile',
        factory: () => React.createElement(TermsOfUseCard, null)
    },
    {
        name: 'Source Code',
        icon: 'fab fa-github',
        factory: () => React.createElement(SourceCodeCard, null)
    },
];
export function OrdinoHelpSection(props) {
    const suffix = React.useMemo(() => UniqueIdManager.getInstance().uniqueId(), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(OrdinoScrollspy, { items: cards.map((item, index) => ({ id: `section${index}_${suffix}`, name: item.name })) }, (handleOnChange) => React.createElement(React.Fragment, null,
            React.createElement("div", { className: "container pt-4" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" }, cards.map((item, index) => {
                        return (
                        // `id` attribute must match the one in the scrollspy
                        React.createElement(OrdinoScrollspyItem, { className: "pt-3 pb-5", id: `section${index}_${suffix}`, key: item.name, index: index, handleOnChange: handleOnChange },
                            React.createElement("h4", { className: "text-left  mt-2 mb-3" },
                                React.createElement("i", { className: `mr-2 ordino-icon-2 ${item.icon}` }),
                                " ",
                                item.name),
                            React.createElement(item.factory, Object.assign({}, { openInNewWindow: props.openInNewWindow }))));
                    })))),
            props.children))));
}
//# sourceMappingURL=OrdinoHelpSection.js.map