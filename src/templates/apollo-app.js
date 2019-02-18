import {
  createClient,
  createServer,
  createContainer,
  createStyle
} from '../creators';

export default (directory, recipes) => (
  [
    createClient(directory, recipes),
    createServer(directory, recipes),
    createContainer(directory, recipes),
    createStyle(directory, recipes)
  ]
);