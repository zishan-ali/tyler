import { createFile } from './';
import {
  serverFixture,
  serverSpecFixture
} from '../fixtures';

export default (
  { 
    server = serverFixture, 
    serverSpec = serverSpecFixture 
  }
) => {
  createFile('server.js', server);
  createFile('server.spec.js', serverSpec);
};
