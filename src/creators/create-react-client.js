import { createFile } from './';
import { reactClientFixture, reactClientSpecFixture } from '../fixtures';

export default (directory, { client = reactClientFixture, clientSpec = reactClientSpecFixture }) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
