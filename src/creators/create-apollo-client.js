import { createFile } from './';
import { apolloAppClientFixture, apolloClientSpecFixture } from '../fixtures';

export default (
  directory,
  { client = apolloAppClientFixture, clientSpec = apolloClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
