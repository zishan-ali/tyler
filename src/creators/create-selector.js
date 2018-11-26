import { createFile, createFolder } from './';
import {
  selectorFixture,
  selectorTestFixture
} from '../fixtures';

export default (directory, 
  {
    selector = selectorFixture,
    selectorTest = selectorTestFixture
  }
) => {
  const folderPath = `${directory}/selectors`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/selector.js`, selector))
    .then(() => createFile(`${folderPath}/selector.spec.js`, selectorTest));
};
