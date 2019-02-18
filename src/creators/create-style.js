import { createFile, createFolder } from './';
import { styleFixture } from '../fixtures';

export default (directory, { styles = styleFixture }) => {
  const folderPath = `${directory}/styles`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/styles.scss`, styles));
};
