import {
  createClient,
  createContainer,
  createStyle
} from '../creators';

export default (directory, recipes) => (
  [
    createClient(directory, recipes),
    createContainer(directory, recipes),
    createStyle(directory, recipes)
  ]
);