import { createFile } from './';
import { clientFixture, clientSpecFixture } from '../fixtures';

export default (directory, { client = clientFixture, clientSpec = clientSpecFixture }) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, clientSpec);
};
