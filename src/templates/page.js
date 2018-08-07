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
  createStyle,
} from '../creators';

export default directory => [
  createAction(directory),
  createReducer(directory),
  createSelector(directory),
  createContainer(directory),
  createComponent(directory),
  createStory(directory),
  createMarkdown(directory),
  createQuery(directory),
  createMutation(directory),
  createStyle(directory),
];
