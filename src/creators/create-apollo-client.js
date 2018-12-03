import { createFile } from './';
import { apolloClientFixture, apolloClientSpecFixture } from '../fixtures';

export default (directory, { client = apolloClientFixture, clientSpec = apolloClientSpecFixture }) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
