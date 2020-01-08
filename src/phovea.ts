import {IRegistry, asResource} from 'phovea_core/src/plugin';
import parseRange from 'phovea_core/src/range/parser';
import ActionNode from 'phovea_core/src/provenance/ActionNode';
import {ILocaleEPDesc, EP_PHOVEA_CORE_LOCALE} from 'phovea_core/src/extensions';

export default function (registry: IRegistry) {
  //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
  // generator-phovea:begin
  registry.push('ordinoWelcomeView', 'ordinoPublicWelcomeView', function () {return System.import('ordino_public/src/WelcomeView.ts');}, {
    priority: 20
  });

  registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicLocaleEN', function () {
    return System.import('ordino_public/src/assets/locales/en/ordino_public.json').then(asResource);
  }, <ILocaleEPDesc>{
    ns: 'ordino_public',
  });

  // generator-phovea:end

}
