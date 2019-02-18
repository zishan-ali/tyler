import { createFile } from './';
import { storyFixture } from '../fixtures';

export default (directory, { story = storyFixture }) =>
  createFile(`${directory}/story.js`, story);
