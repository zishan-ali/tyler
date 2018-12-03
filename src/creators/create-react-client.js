import { createFile } from './';
import { reactAppClientFixture, reactClientSpecFixture } from '../fixtures';

export default (
  directory,
  { client = reactAppClientFixture, clientSpec = reactClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
