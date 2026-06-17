import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeature extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    feature: Schema.Attribute.Component<'components.feature', true>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.feature': BlocksFeature;
      'blocks.hero': BlocksHero;
      'components.feature': ComponentsFeature;
    }
  }
}
