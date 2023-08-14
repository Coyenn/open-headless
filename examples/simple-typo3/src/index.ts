import { ProjectConfiguration, Typo3Connector } from "open-headless";

const projectConfig: ProjectConfiguration = {
  name: "My Project",
  cmsPath: "http://cms.my-project.com",
};
const projectConnector = new Typo3Connector(projectConfig);

const processRequest = async (path: string) => {
  projectConnector.requestPage(path)
    .then((response) => {
      if (response) {
        if ('layout' in response) {
          console.log("Got a page response:", response);
        } else {
          console.log("Got a redirect response:", response);
        }
      } else {
        throw new Error(`Invalid response. Expected a page or redirect, got ${response}`);
      }
    });
};

// This can be called whenever a route is requested.
processRequest("/my-page");
