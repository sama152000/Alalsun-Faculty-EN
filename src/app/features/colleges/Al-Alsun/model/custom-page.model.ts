export interface CustomPage {
  id: string;
  title: string;
  route: string;
  template: PageTemplate;
  content: PageContent;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum PageTemplate {
  TITLE_TEXT = 'title-text',
  IMAGE_TITLE_TEXT = 'image-title-text',
  CARDS = 'cards'
}

export interface PageContent {
  title?: string;
  text?: string;
  image?: string;
  cards?: PageCard[];
}

export interface PageCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export interface PageTemplateDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  preview: string;
}
