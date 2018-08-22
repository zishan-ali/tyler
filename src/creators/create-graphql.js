import { createFile, createFolder } from './';
import {
  queryFixture,
  mutationFixture
} from '../fixtures';

export const query = (directory) => {
  const folderPath = `${directory}/graphql`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/queries.js`, queryFixture))
};

export const mutation = (directory) => {
  const folderPath = `${directory}/graphql`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/mutations.js`, mutationFixture))
};