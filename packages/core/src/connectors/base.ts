import type { CmsConnector, CmsResponse, ProjectConfiguration } from "@/core";

/**
* The BaseConnector represents the base connector for all CMS connectors.
*/
class BaseConnector implements CmsConnector {
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

export { BaseConnector };
