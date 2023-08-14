/**
 * Holds the central configuration of your project.
 */
interface ProjectConfiguration {
  name: string;
  cmsConnector: CmsConnector;
  cmsPath: string;
}

interface IdentifiableObject {
  id: string;
}

/**
 * The PageMeta holds metainformation about the page.
 * For example, this can be used to hold properties relevant for SEO.
 */
interface PageMeta {
  title?: string;
  description?: string;
}

/**
 * The content you see on a website is made up of so called 'content elements'.
 * They are the smallest building blocks of a page.
 * A section, a hero image, a text block are all content elements.
 */
interface ContentElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: { [key: string]: unknown };
}

interface PageLayout extends IdentifiableObject {
  name: string;
}

interface Page extends IdentifiableObject {
  layout: PageLayout;
  meta: PageMeta;
  content: ContentElement[];
}

interface Redirect extends IdentifiableObject {
  statusCode?: number;
  target: string;
}

type CmsResponse = Page | Redirect;

/**
 * A CmsConnector is a connector to a content management system (CMS).
 * It is used to request data the CMS.
 */
interface CmsConnector {
  requestPage(path?: string, cmsPath?: string): Promise<Page | Redirect>;
}

export type {
  ProjectConfiguration,
  CmsConnector,
  CmsResponse,
  Page,
  Redirect,
  PageMeta,
  ContentElement,
  IdentifiableObject,
};
