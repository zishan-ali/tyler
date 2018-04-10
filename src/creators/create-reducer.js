import { createFile, createFolder } from './';
import { kebabCase } from '../utils'
import {
  reducerFixture,
  reducerTestFixture
} from '../fixtures';

export default (directory) => {
  const folderPath = `${directory}/reducers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/reducer.js`, reducerFixture))
    .then(() => createFile(`${folderPath}/reducer.spec.js`, reducerTestFixture))
};