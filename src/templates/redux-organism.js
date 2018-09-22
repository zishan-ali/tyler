import {
  createAction,
  createReducer,
  createSelector,
  createReduxContainer,
  createComponent,
  createStory,
  createMarkdown,
  createQuery,
  createMutation,
  createStyle
} from '../creators'

export default (directory) => (
  [
    createAction(directory),
    createReducer(directory),
    createSelector(directory),
    createReduxContainer(directory),
    createComponent(directory),
    createStory(directory),
    createMarkdown(directory),
    createQuery(directory),
    createMutation(directory),
    createStyle(directory)
  ]
);