import { createFile, createFolder } from './';
import {
  reducerFixture,
  reducerTestFixture
} from '../fixtures';

export default (directory, 
  { 
    reducer = reducerFixture,
    reducerTest = reducerTestFixture
  }
) => {
  const folderPath = `${directory}/reducers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/reducer.js`, reducer))
    .then(() => createFile(`${folderPath}/reducer.spec.js`, reducerTest));
};