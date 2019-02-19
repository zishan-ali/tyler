import { createReactClient, createContainer, createStyle } from '../creators';

export default (directory, recipes) => [
  createReactClient(directory, recipes),
  createContainer(directory, recipes),
  createStyle(directory, recipes)
];
