import { createFile } from './';
import { reduxClientFixture, reduxClientSpecFixture } from '../fixtures';

export default (directory, { client = reduxClientFixture, clientSpec = reduxClientSpecFixture }) => {
  createFile(`${directory}/app.js`, client);
  createFile(`${directory}/app.spec.js`, '');
};
