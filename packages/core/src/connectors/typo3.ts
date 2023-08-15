import type {
  ContentElement,
  IdentifiableObject,
} from "@/index";
import { BaseConnector } from "./base";

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
const Typo3Connector = BaseConnector;

export type { GridElement, LoopElement, BoxElement };
export { Typo3Connector };
