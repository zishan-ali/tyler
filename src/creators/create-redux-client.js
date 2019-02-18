import { createFile } from './';
import { reduxAppClientFixture, reduxClientSpecFixture } from '../fixtures';

export default (
  directory,
  { app = reduxAppClientFixture, appSpec = reduxClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, app);
  createFile(`${directory}/app.spec.js`, '');
};
