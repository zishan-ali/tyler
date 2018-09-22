import { createFile, createFolder } from './';
import {
  apolloContainerFixture,
  apolloContainerTestFixture
} from '../fixtures';

export default (directory) => {
  const folderPath = `${directory}/containers`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Container.jsx`, apolloContainerFixture))
    .then(() => createFile(`${folderPath}/Container.spec.js`, apolloContainerTestFixture))
};