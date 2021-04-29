import { LinkProps } from 'react-router-dom';
interface IDualLinkProps<S> extends LinkProps<S> {
    openInNewWindow?: boolean;
}
/**
 * A link that can open either in the current tab or a new one.
 * @param props openInNewWindow
 */
export declare function DualLink<S>(props: IDualLinkProps<S>): JSX.Element;
export {};
