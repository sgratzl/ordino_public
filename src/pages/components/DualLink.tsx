import {LinkProps, Link} from 'react-router-dom';
import * as React from 'react';

interface IDualLinkProps<S> extends LinkProps<S> {
    openInNewWindow?: boolean;
}

/**
 * A link that can open either in the current tab or a new one.
 * @param props openInNewWindow
 */
export function DualLink<S>(props: IDualLinkProps<S>) {
    let newProps = {...props};
    if (props.openInNewWindow) {
        delete newProps.openInNewWindow;
        newProps = {
            ...newProps, ...{target: '_blank', rel: 'noopener noreferrer'}
        } as LinkProps<S>;
    }
    return <Link {...newProps}>{newProps.children}</Link>;
}
