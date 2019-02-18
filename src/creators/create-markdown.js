import { createFile } from './';
import { readMeFixture } from '../fixtures';

export default (directory, { readme = readMeFixture }) =>
  createFile(`${directory}/README.md`, readme);
