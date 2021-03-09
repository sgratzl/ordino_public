export default interface IClientConfigOptions {
    $schema: string;
    /**
     * @default false
     * @description Whether to show the datsets tab
     */
    enableDatasetsTab?: boolean;
    /**
     * @description Whether to show the tours tab
     */
    enableToursTab?: boolean;
    /**
     * @description Whether to show the sessions tab
     */
    enableSessionsTab?: boolean;
    /**
     * @description Whether to show the more tab
     */
    enableMoreTab?: boolean;
    /**
     * @description Set custom app header height
     * @minimum 20
     * @maximum 200
     */
    headerHeight: number;
    actions: 'hide' | 'show';
}
