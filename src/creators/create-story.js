import { storyFixture } from '../fixtures';

import { createFile } from '.';

export default directory => createFile(`${directory}/story.js`, storyFixture);
