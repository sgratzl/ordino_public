import { IWelcomeView } from 'ordino/src/WelcomeView';
export declare class WelcomeView implements IWelcomeView {
    private parent;
    constructor(parent: HTMLElement);
    build(): void;
}
