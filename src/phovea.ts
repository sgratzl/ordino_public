import {IRegistry, PluginRegistry} from 'phovea_core';
import {ILocaleEPDesc, EP_PHOVEA_CORE_LOCALE} from 'phovea_core';
import {EP_PHOVEA_CLUE_PROVENANCE_GRAPH} from 'phovea_clue';

export default function (registry: IRegistry) {
  //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
  // generator-phovea:begin
  registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicTdpLocaleEN', function () {
    return import('./locales/en/tdp.json').then(PluginRegistry.getInstance().asResource);
  }, <ILocaleEPDesc>{
    ns: 'tdp',
  });
  // generator-phovea:end

}
