import { createFile } from './';
import { serverFixture, serverSpecFixture } from '../fixtures';

export default (directory, { server = serverFixture, serverSpec = serverSpecFixture }) => {
  createFile(`${directory}/server.js`, server);
  createFile(`${directory}/server.spec.js`, serverSpec);
};