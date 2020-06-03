import {IRegistry, PluginRegistry} from 'phovea_core';
import {ILocaleEPDesc, EP_PHOVEA_CORE_LOCALE} from 'phovea_core';

export default function (registry: IRegistry) {
  //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
  // generator-phovea:begin
  registry.push('ordinoWelcomeView', 'ordinoPublicWelcomeView', function () {return import('./app/WelcomeView').then((w) => w.WelcomeView);}, {
    priority: 20
  });

  registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicTdpLocaleEN', function () {
    return import('./assets/locales/en/tdp.json').then(PluginRegistry.getInstance().asResource);
  }, <ILocaleEPDesc>{
    ns: 'tdp',
  });

  // generator-phovea:end

}
