import { createFile, createFolder } from './';
import {
  componentFixture,
  componentTestFixture
} from '../fixtures';

export default (directory, 
  { 
    component = componentFixture, 
    componentTest = componentTestFixture 
  }
) => {
  const folderPath = `${directory}/components`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Component.jsx`, component))
    .then(() => createFile(`${folderPath}/Component.spec.js`, componentTest));
};
