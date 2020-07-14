import { IWelcomeView } from 'ordino';
export declare class WelcomeView implements IWelcomeView {
    private parent;
    constructor(parent: HTMLElement);
    build(): void;
    /**
     * Create migration message to add to the persisstent sessions section. Temporary feature will be removed eventually.
     */
    createMigrationMessage(parentNode: Element): void;
}
