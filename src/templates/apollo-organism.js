import {
  createApolloContainer,
  createComponent,
  createStory,
  createMarkdown,
  createQuery,
  createMutation
} from '../creators'

export default (directory) => (
  [
    createApolloContainer(directory),
    createComponent(directory),
    createStory(directory),
    createMarkdown(directory),
    createQuery(directory),
    createMutation(directory)
  ]
);