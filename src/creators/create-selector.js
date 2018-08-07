import { selectorFixture, selectorTestFixture } from '../fixtures';

import { createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/selectors`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/selector.js`, selectorFixture))
    .then(() => createFile(`${folderPath}/selector.spec.js`, selectorTestFixture));
};
