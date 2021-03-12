import { PluginRegistry } from 'phovea_core';
import { EP_PHOVEA_CORE_LOCALE } from 'phovea_core';
export default function (registry) {
    //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
    // generator-phovea:begin
    registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicTdpLocaleEN', function () {
        return import('./locales/en/tdp.json').then(PluginRegistry.getInstance().asResource);
    }, {
        ns: 'tdp',
    });
    // generator-phovea:end
}
//# sourceMappingURL=phovea.js.map