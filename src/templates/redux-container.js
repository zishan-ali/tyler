import { createReduxContainer } from '../creators'

export default (directory) => (
  [
    createReduxContainer(directory)
  ]
);