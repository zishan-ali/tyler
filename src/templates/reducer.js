import { createReducer } from '../creators';

export default (directory, recipes) => (
  [
    createReducer(directory, recipes)
  ]
);