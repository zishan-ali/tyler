import { createSelector } from '../creators'

export default (directory, recipes) => (
  [
    createSelector(directory, recipes)
  ]
);