import { createFile, createFolder } from './';
import {
  reduxContainerFixture,
  reduxContainerTestFixture
} from '../fixtures';

export default (directory) => {
  const folderPath = `${directory}/containers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Container.jsx`, reduxContainerFixture))
    .then(() => createFile(`${folderPath}/Container.spec.js`, reduxContainerTestFixture))
};