import { createAction } from '../creators'

export default (directory, recipes) => (
  [
    createAction(directory, recipes)
  ]
);