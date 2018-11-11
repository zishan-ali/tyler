import { createFile, createFolder } from './';
import { kebabCase } from '../utils';
import { styleFixture } from '../fixtures';

export default (directory, { style = styleFixture }) => {
  const folderPath = `${directory}/styles`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/style.scss`, style));
}
