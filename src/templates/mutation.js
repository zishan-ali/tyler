import { createMutation } from '../creators';

export default (directory, recipes) => (
  [
    createMutation(directory, recipes)
  ]
);