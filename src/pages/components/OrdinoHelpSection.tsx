import React from 'react';
import {DisclaimerCard} from './DisclaimerCard';
import {OrdinoContactForm} from './OrdinoContactForm';
import {IVideoCardProps, VideoCard} from './VideoCard';
import {OrdinoScrollspy, OrdinoScrollspyItem, OrdinoFooter} from 'ordino';
import {UniqueIdManager} from 'phovea_core';
import {SourceCodeCard} from './SourceCodeCard';
import {TermsOfUseCard} from './TermsOfuseCard';

const cards = [
  {
    name: 'Ordino at a Glance',
    icon: 'fas fa-mountain',
    factory: (props: IVideoCardProps) => <VideoCard {...props} />

  },
  {
    name: 'Contact us',
    icon: 'fas fa-at',
    factory: () => <OrdinoContactForm />

  },
  {
    name: 'Disclaimer',
    icon: 'fas fa-exclamation-triangle',
    factory: () => <DisclaimerCard />

  },
  {
    name: 'Terms of Use',
    icon: 'fas fa-smile',
    factory: () => <TermsOfUseCard />
  },
  {
    name: 'Source Code',
    icon: 'fab fa-github',
    factory: () => <SourceCodeCard />
  },
];


interface IOrdinoHelpSectionProps {
  /**
   * Whether to open the links to other pages in a new tab
   */
  openInNewWindow?: boolean;
  children?: React.ReactNode;
}

export function OrdinoHelpSection(props: IOrdinoHelpSectionProps) {
  const suffix = React.useMemo(() => UniqueIdManager.getInstance().uniqueId(), []);
  return (<>
    <OrdinoScrollspy items={cards.map((item, index) => ({id: `section${index}_${suffix}`, name: item.name}))}>
      {(handleOnChange) =>
        <>
          <div className="container pt-4">
            <div className="row">
              <div className="col">
                {cards.map((item, index) => {

                  return (
                    // `id` attribute must match the one in the scrollspy
                    <OrdinoScrollspyItem className="pt-3 pb-5" id={`section${index}_${suffix}`} key={item.name} index={index} handleOnChange={handleOnChange}>
                      <h4 className="text-left  mt-2 mb-3"><i className={`mr-2 ordino-icon-2 ${item.icon}`}></i> {item.name}</h4>
                      <item.factory {...{openInNewWindow: props.openInNewWindow}} />
                    </OrdinoScrollspyItem>
                  );
                })}
              </div>
            </div>
          </div>
          {props.children}
        </>
      }
    </OrdinoScrollspy>
  </>);
}
