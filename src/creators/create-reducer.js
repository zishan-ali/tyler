import { reducerFixture, reducerTestFixture } from '../fixtures';

import { createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/reducers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/reducer.js`, reducerFixture))
    .then(() => createFile(`${folderPath}/reducer.spec.js`, reducerTestFixture));
};
