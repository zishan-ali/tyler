import { createFile, createFolder } from './';
import {
  componentFixture,
  componentSpecFixture
} from '../fixtures';

export default (directory, 
  { 
    component = componentFixture, 
    componentSpec = componentSpecFixture 
  }
) => {
  const folderPath = `${directory}/components`;
  return createFolder(folderPath)
    .then(() => createFile(`${folderPath}/Component.jsx`, component))
    .then(() => createFile(`${folderPath}/Component.spec.js`, componentSpec));
};
