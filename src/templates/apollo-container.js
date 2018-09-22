import { createComponent, createApolloContainer } from '../creators'

export default (directory) => (
  [
    createComponent(directory),
    createApolloContainer(directory)
  ]
);