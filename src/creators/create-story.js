import { createFile } from './';
import { storyFixture } from '../fixtures';

export default (directory) =>
  createFile(`${directory}/story.js`, storyFixture);
