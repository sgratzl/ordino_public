import {IRegistry, PluginRegistry} from 'phovea_core';
import {ILocaleEPDesc, EP_PHOVEA_CORE_LOCALE} from 'phovea_core';
import {EP_ORDINO_START_MENU_TAB, EStartMenuSection, EP_ORDINO_FOOTER_MENU, IOrdinoFooterMenuDesc} from 'ordino';

export default function (registry: IRegistry) {
  //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
  // generator-phovea:begin

  registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_help_tab', () => import('./menu/HelpTab'), {
    icon: 'fas fa-question-circle fa-fw',
    menu: EStartMenuSection.RIGHT,
  });

  registry.push(EP_ORDINO_FOOTER_MENU, 'ordino_footer_menu', () => ({}), <IOrdinoFooterMenuDesc>{
    lists: [
      [
        {
          page: '/news',
          faIcon: 'fas fa-fw fa-newspaper',
          text: `What's new?`,
        },
        {
          page: '/features',
          faIcon: 'fas fa-fw fa-check',
          text: `Features`,
        },
        {
          page: '/datasets',
          faIcon: 'fas fa-fw fa-database',
          text: `Loaded datasets`,
        },
        {
          page: '/publications',
          faIcon: 'fas fa-fw fa-book-open',
          text: `Publications`,
        },
      ],
      [
        {
          page: '/help/ordino-at-a-glance',
          faIcon: 'fas fa-fw fa-mountain',
          text: `Ordino at a glance`,
        },
        {
          page: '/help/contact-us',
          faIcon: 'fas fa-fw fa-at',
          text: `Contact us`,
        },
        {
          page: '/help/disclaimer',
          faIcon: 'fas fa-fw fa-exclamation-triangle',
          text: `Disclaimer`,
        },
        {
          page: '/help/terms-of-use',
          faIcon: 'fas fa-fw fa-smile',
          text: `Terms of use`,
        },
        {
          page: '/help/source-code-licenses',
          faIcon: 'fas fa-fw fa-code',
          text: `Source code & licenses`,
        },
      ]
    ]
  });

  registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicTdpLocaleEN', function () {
    return import('./locales/en/tdp.json').then(PluginRegistry.getInstance().asResource);
  }, <ILocaleEPDesc>{
    ns: 'tdp',
  });
  // generator-phovea:end

}
