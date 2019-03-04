import { createFile } from './';
import { reduxAppClientFixture } from '../fixtures';

export default (directory, { app = reduxAppClientFixture }) =>
  createFile(`${directory}/app.js`, app);
