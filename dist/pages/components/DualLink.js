import { Link } from 'react-router-dom';
import * as React from 'react';
/**
 * A link that can open either in the current tab or a new one.
 * @param props openInNewWindow
 */
export function DualLink(props) {
    let newProps = { ...props };
    if (props.openInNewWindow) {
        delete newProps.openInNewWindow;
        newProps = {
            ...newProps, ...{ target: '_blank', rel: 'noopener noreferrer' }
        };
    }
    return React.createElement(Link, Object.assign({}, newProps), newProps.children);
}
//# sourceMappingURL=DualLink.js.map