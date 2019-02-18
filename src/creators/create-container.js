import { createFile, createFolder } from './';
import {
  containerFixture,
  containerSpecFixture
} from '../fixtures';

export default (directory, 
  { 
    container = containerFixture,
    containerSpec = containerSpecFixture
   }
) => {
  const folderPath = `${directory}/containers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Container.jsx`, container))
    .then(() => createFile(`${folderPath}/Container.spec.js`, containerSpec));
};