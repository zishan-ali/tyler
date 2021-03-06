import {
  createAction,
  createReducer,
  createSelector,
  createContainer,
  createComponent,
  createStory,
  createMarkdown,
  createQuery,
  createMutation,
  createStyle
} from '../creators';

export default (directory, recipes) => (
  [
    createAction(directory, recipes),
    createReducer(directory, recipes),
    createSelector(directory, recipes),
    createContainer(directory, recipes),
    createComponent(directory, recipes),
    createStory(directory, recipes),
    createMarkdown(directory, recipes),
    createQuery(directory, recipes),
    createMutation(directory, recipes),
    createStyle(directory, recipes)
  ]
);