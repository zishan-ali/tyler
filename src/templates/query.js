import { createQuery } from '../creators';

export default (directory, recipes) => (
  [
    createQuery(directory, recipes)
  ]
);