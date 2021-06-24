import * as React from 'react';
export function FeatureCard({ image, title, children }) {
    return (React.createElement("div", { className: "col mt-4" },
        React.createElement("div", { className: "card shadow-sm h-100" },
            React.createElement("div", { className: "card-body p-3" },
                React.createElement("h5", { className: "card-title" }, title),
                children))));
}
//# sourceMappingURL=FeatureCard.js.map