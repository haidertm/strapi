import type { Schema, Attribute } from '@strapi/strapi';

export interface MegaMenuBlock extends Schema.Component {
  collectionName: 'components_mega_menu_blocks';
  info: {
    displayName: 'Block';
    icon: 'expand';
  };
  attributes: {
    Label: Attribute.String;
    link: Attribute.Component<'menu.link', true>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mega-menu.block': MegaMenuBlock;
      'menu.link': MenuLink;
    }
  }
}
