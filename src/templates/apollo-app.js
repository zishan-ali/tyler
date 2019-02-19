import { createApolloClient, createServer, createContainer, createStyle } from '../creators';

export default (directory, recipes) => [
  createApolloClient(directory, recipes),
  createServer(directory, recipes),
  createContainer(directory, recipes),
  createStyle(directory, recipes)
];
