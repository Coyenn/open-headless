/**
* Holds the central configuration of your project.
*/
interface ProjectConfiguration {
  name: string;
  cmsConnector: CmsConnector;
  cmsPath: string;

  [key: string]: any;
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
  keywords?: string[];
  image?: string;
  url?: string;

  [key: string]: any;
}

/**
* The content you see on a page is made up so called 'content elements'.
* A section, a hero image, a text block are all content elements.
*/
interface ContentElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: { [key: string]: any };

  [key: string]: any;
}

/**
* A page is the main building block of a website.
* Each page can contain content elements.
*/
interface Page extends IdentifiableObject {
  meta?: PageMeta;
  content?: ContentElement[];

  [key: string]: any;
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

  [key: string]: any;
}

export type { ProjectConfiguration, CmsConnector, CmsResponse, Page, Redirect, PageMeta, ContentElement, IdentifiableObject };
