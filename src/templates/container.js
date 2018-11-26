import { createContainer } from '../creators';

export default (directory, recipes) => (
  [
    createContainer(directory, recipes)
  ]
);