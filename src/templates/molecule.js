import {
  createComponent,
  createStory,
  createMarkdown,
  createStyle
} from '../creators'

export default (directory) => (
  [
    createComponent(directory),
    createStory(directory),
    createMarkdown(directory),
    createStyle(directory)
  ]
);