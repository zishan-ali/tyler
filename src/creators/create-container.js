import { containerFixture, containerTestFixture } from '../fixtures';

import { createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/containers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Container.jsx`, containerFixture))
    .then(() => createFile(`${folderPath}/Container.spec.js`, containerTestFixture));
};
