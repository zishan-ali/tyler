import { styleFixture } from '../fixtures';

import { createFile, createFolder } from '.';

export default directory => {
  const folderPath = `${directory}/styles`;
  return createFolder(folderPath).then(() => createFile(`${folderPath}/style.scss`, styleFixture));
};
