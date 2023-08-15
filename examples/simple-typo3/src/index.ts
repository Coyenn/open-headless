import { ProjectConfiguration, Typo3Connector } from "open-headless";

const projectConfig: ProjectConfiguration = {
  name: "My Project",
  cmsPath: "http://cms.my-project.com",
};
const projectConnector = new Typo3Connector(projectConfig);

const main = async () => {
  const response = await projectConnector.requestPage("/my-page");

  if ('layout' in response) {
    console.log("Got a page response:", response);
  } else {
    console.log("Got a redirect response:", response);
  }
};

main();
