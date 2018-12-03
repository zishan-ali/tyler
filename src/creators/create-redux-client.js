import { createFile } from './';
import { reduxAppClientFixture, reduxClientSpecFixture } from '../fixtures';

export default (
  directory,
  { client = reduxAppClientFixture, clientSpec = reduxClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
