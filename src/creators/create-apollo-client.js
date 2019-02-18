import { createFile } from './';
import { apolloAppClientFixture, apolloClientSpecFixture } from '../fixtures';

export default (
  directory,
  { app = apolloAppClientFixture, appSpec = apolloClientSpecFixture }
) => {
  createFile(`${directory}/app.js`, app);
  createFile(`${directory}/app.spec.js`, '');
};
