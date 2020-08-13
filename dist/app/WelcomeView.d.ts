import { IWelcomeView } from 'ordino';
import { ProvenanceGraph } from 'phovea_core';
export declare class WelcomeView implements IWelcomeView {
    private parent;
    constructor(parent: HTMLElement);
    build(): void;
    /**
     * Create migration message to add to the persisstent sessions section. Temporary feature will be removed eventually.
     */
    private createMigrationMessage;
}
/**
 * Show a migration popup for Ordino hg38 instance.
 * The dialog can be dismissed and should not open again.
 * The dialog should also not open, if the user has already
 * selected an entry point or session from the start menu.
 *
 * Temporary feature will be removed eventually.
 *
 * @param graph Provenance graph
 */
export declare function dismissMigrationPopup(graph: ProvenanceGraph): void;
