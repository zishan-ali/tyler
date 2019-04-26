import { createFile, createFolder } from './';
import { storyFixture, storyIndexFixture } from '../fixtures';

export default (directory, { storyDefault = storyFixture, storyIndex = storyIndexFixture }) =>
  createFolder(`${directory}/story`)
    .then(() => createFile(`${directory}/story/index.js`, storyIndex))
    .then(() => createFile(`${directory}/story/Default.jsx`, storyDefault));
