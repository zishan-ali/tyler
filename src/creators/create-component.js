import { componentFixture, componentTestFixture } from '../fixtures';

import { createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/components`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Component.jsx`, componentFixture))
    .then(() => createFile(`${folderPath}/Component.spec.js`, componentTestFixture));
};
