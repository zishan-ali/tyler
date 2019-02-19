import { createReduxClient, createServer, createContainer, createStyle } from '../creators';

export default (directory, recipes) => [
  createReduxClient(directory, recipes),
  createServer(directory, recipes),
  createContainer(directory, recipes),
  createStyle(directory, recipes)
];
