import { createFile } from './';
import { apolloAppClientFixture } from '../fixtures';

export default (directory, { app = apolloAppClientFixture }) =>
  createFile(`${directory}/app.js`, app);
