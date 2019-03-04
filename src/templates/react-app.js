import { createReactClient, createContainer, createStyle, createMarkdown } from '../creators';

export default (directory, recipes) => [
  createReactClient(directory, recipes),
  createContainer(directory, recipes),
  createStyle(directory, recipes),
  createMarkdown(directory, recipes)
];
