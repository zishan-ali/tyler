import { createFile } from './';
import { serverFixture } from '../fixtures';

export default (directory, { server = serverFixture }) =>
  createFile(`${directory}/server.js`, server);
