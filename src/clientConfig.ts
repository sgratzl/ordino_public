interface IHeaderOptions {
    color: 'black' | 'white';
    size: 'sm' | 'md' | 'lg';
}




export default interface IClientConfigOptions {
    /**
     * @description to enable vs codes
     */
    enableDatasetsTab?: boolean;
    enableToursTab?: boolean;
    enableSessionsTab?: boolean;
    enableMoreTab?: boolean;
    header: IHeaderOptions;
    extra: string;
}
