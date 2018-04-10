import { createFile } from './';
import { readMeFixture } from '../fixtures';

export default (directory) =>
  createFile(`${directory}/README.md`, readMeFixture);
