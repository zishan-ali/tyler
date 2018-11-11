import { createFile, createFolder } from './';
import {
  containerFixture,
  containerTestFixture
} from '../fixtures';

export default (directory, 
  { 
    container = containerFixture,
    containerTest = containerTestFixture
   }
) => {
  const folderPath = `${directory}/containers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Container.jsx`, container))
    .then(() => createFile(`${folderPath}/Container.spec.js`, containerTest));
};