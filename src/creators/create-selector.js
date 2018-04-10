import { createFile, createFolder } from './';
import { kebabCase } from '../utils';
import {
  selectorFixture,
  selectorTestFixture
} from '../fixtures';

export default (directory) => {
  const folderPath = `${directory}/selectors`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/selector.js`, selectorFixture))
    .then(() => createFile(`${folderPath}/selector.spec.js`, selectorTestFixture));
}