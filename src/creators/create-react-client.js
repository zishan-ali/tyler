import { createFile } from './';
import { reactAppClientFixture, reactClientSpecFixture } from '../fixtures';

export default (
  directory,
  { app = reactAppClientFixture, appSpec = reactClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, app);
  createFile(`${directory}/app.spec.js`, '');
};
