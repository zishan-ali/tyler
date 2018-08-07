import { createComponent, createStory, createMarkdown } from '../creators';

export default directory => [createComponent(directory), createStory(directory), createMarkdown(directory)];
