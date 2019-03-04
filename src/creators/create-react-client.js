import { createFile } from './';
import { reactAppClientFixture } from '../fixtures';

export default (directory, { app = reactAppClientFixture }) => 
  createFile(`${directory}/app.js`, app);
