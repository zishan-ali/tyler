import { createApolloClient, createServer, createContainer, createStyle, createMarkdown } from '../creators';

export default (directory, recipes) => [
  createApolloClient(directory, recipes),
  createServer(directory, recipes),
  createContainer(directory, recipes),
  createStyle(directory, recipes),
  createMarkdown(directory, recipes)
];
