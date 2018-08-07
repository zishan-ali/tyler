import { actionFixture, actionTestFixture, actionTypesFixture } from '../fixtures';

import { createAppendices, createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/actions`;
  return createFolder(folderPath)
    .then(() => createAppendices(`${folderPath}/action-types.js`, actionTypesFixture))
    .then(() => createFile(`${folderPath}/action.js`, actionFixture))
    .then(() => createFile(`${folderPath}/action.spec.js`, actionTestFixture));
};
