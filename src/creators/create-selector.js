import { createFile, createFolder } from './';
import {
  selectorFixture,
  selectorSpecFixture
} from '../fixtures';

export default (directory, 
  {
    selector = selectorFixture,
    selectorSpec = selectorSpecFixture
  }
) => {
  const folderPath = `${directory}/selectors`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/selector.js`, selector))
    .then(() => createFile(`${folderPath}/selector.spec.js`, selectorSpec));
};
