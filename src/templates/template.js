import {
  createComponent,
  createStory,
  createMarkdown,
  createStyle
} from '../creators';

export default (directory, recipes) => (
  [
    createComponent(directory, recipes),
    createStory(directory, recipes),
    createMarkdown(directory, recipes),
    createStyle(directory, recipes)
  ]
);