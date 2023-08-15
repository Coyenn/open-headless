import {
  type ProjectConfiguration,
  type CmsConnector,
  type CmsResponse,
  type ContentElement,
  type IdentifiableObject,
} from "@/index";

/**
 * The BoxElement is akin to a content element.
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
}

/**
 * A grid element is a container for other elements.
 * It can contain other grid elements or content elements.
 */
interface GridElement extends IdentifiableObject {
  name: string;
  type: string;
  content?: BoxElement | GridElement;
}

/**
 * The Typo3Connector is a connector for the CMS TYPO3.
 * More information about TYPO3 can be found at https://typo3.org
 */
class Typo3Connector implements CmsConnector {
  constructor(private projectConfiguration: ProjectConfiguration) { }

  async requestPage(path: string): Promise<CmsResponse> {
    const requestUrl = new URL(path, this.projectConfiguration.cmsPath);
    const response = await fetch(requestUrl.toString());

    if (!response.ok) {
      throw new Error(`Failed to fetch page from ${requestUrl.toString()}`);
    }

    const cmsResponse = (await response.json()) as CmsResponse;

    if (!cmsResponse || !("id" in cmsResponse)) {
      throw new Error(`Invalid response from ${requestUrl.toString()}`);
    }

    return cmsResponse;
  }
}

export type { GridElement, LoopElement, BoxElement };
export { Typo3Connector };
