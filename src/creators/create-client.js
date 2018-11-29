import { createFile } from './';
import {
  clientFixture,
  clientSpecFixture
} from '../fixtures';

export default (
  { 
    client = clientFixture, 
    clientSpec = clientSpecFixture 
  }
) => {
  createFile('app.js', client);
  createFile('app.spec.js', clientSpec);
};
