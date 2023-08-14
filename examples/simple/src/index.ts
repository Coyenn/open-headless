import { ProjectConfiguration } from "open-headless";
import { typo3 } from "open-headless/connectors";

const config: ProjectConfiguration = {
  name: "My Project",
  cmsConnector: typo3,
  cmsPath: "http://cms.my-project.com",
};
