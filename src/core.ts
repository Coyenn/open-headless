interface ProjectConfiguration {
  name: string;
  cmsConnector: CmsConnector;
  cmsPath: string;

  [key: string]: any;
}

interface IdentifiableObject {
  id: string;
}

interface PageMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;

  [key: string]: any;
}

interface ContentElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: { [key: string]: any };

  [key: string]: any;
}

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

interface CmsConnector {
  requestPage(path?: string, cmsPath?: string): Promise<Page | Redirect>;

  [key: string]: any;
}

export type { ProjectConfiguration, CmsConnector, CmsResponse, Page, Redirect, PageMeta, ContentElement, IdentifiableObject };
