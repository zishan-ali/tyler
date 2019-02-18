import { createMarkdown } from '../creators';

export default (directory, recipes) => (
  [
    createMarkdown(directory, recipes)
  ]
);