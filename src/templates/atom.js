import {
  createComponent,
  createStory,
  createMarkdown
} from '../creators';

export default (directory, recipes) => (
  [
    createComponent(directory, recipes),
    createStory(directory, recipes),
    createMarkdown(directory, recipes)
  ]
);