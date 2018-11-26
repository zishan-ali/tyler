import { createStory } from '../creators';

export default (directory, recipes) => (
  [
    createStory(directory, recipes)
  ]
);