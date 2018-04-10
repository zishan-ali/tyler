import { createFile, createFolder } from './';
import { kebabCase } from '../utils';
import { styleFixture } from '../fixtures';

export default (directory) => {
  const folderPath = `${directory}/styles`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/style.scss`, styleFixture));
}
