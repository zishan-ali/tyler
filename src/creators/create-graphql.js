import { createFile, createFolder } from './';
import {
  queryFixture,
  mutationFixture
} from '../fixtures';

export const query = (directory, 
  { query = queryFixture }
) => {
  const folderPath = `${directory}/graphql`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/queries.js`, query));
};

export const mutation = (directory, 
  { mutation = mutationFixture }
) => {
  const folderPath = `${directory}/graphql`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/mutations.js`, mutation));
};