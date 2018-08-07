import { readMeFixture } from '../fixtures';

import { createFile } from '.';

export default directory => createFile(`${directory}/README.md`, readMeFixture);
