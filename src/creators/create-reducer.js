import { createFile, createFolder } from './';
import {
  reducerFixture,
  reducerSpecFixture
} from '../fixtures';

export default (directory, 
  { 
    reducer = reducerFixture,
    reducerSpec = reducerSpecFixture
  }
) => {
  const folderPath = `${directory}/reducers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/reducer.js`, reducer))
    .then(() => createFile(`${folderPath}/reducer.spec.js`, reducerSpec));
};