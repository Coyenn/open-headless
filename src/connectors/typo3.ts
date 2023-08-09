import { CmsConnector, CmsResponse, ContentElement, IdentifiableObject, Page, Redirect } from "@/core";

/**
* The BoxElement is a content element that can be rendered.
*/
type BoxElement = ContentElement;

/**
* A loop element can contain one or more content elements.
* (A list is a loop element, for example)
*/
interface LoopElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: BoxElement[];

  [key: string]: any;
}

/**
* A grid element is a container for other elements.
* It can contain other grid elements or content elements.
*/
interface GridElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: BoxElement | GridElement;

  [key: string]: any;
}

const typo3Connector: CmsConnector = {
  requestPage: async (path: string, cmsPath: string) => {
    const requestUrl = new URL(path, cmsPath);
    const response = await fetch(requestUrl.toString());

    if (!response.ok) {
      throw new Error(`Failed to fetch page from ${requestUrl.toString()}`);
    }

    const cmsResponse = await response.json() as CmsResponse;

    if (!cmsResponse || !('id' in cmsResponse)) {
      throw new Error(`Invalid response from ${requestUrl.toString()}`);
    }

    if ('target' in cmsResponse) {
      return cmsResponse as Redirect;
    } else {
      return cmsResponse as Page;
    }
  }
};


export default typo3Connector;
export type { GridElement, LoopElement, BoxElement };
