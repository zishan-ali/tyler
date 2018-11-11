import { createAppendices, createFile, createFolder } from './';
import {
  actionFixture,
  actionTestFixture,
  actionTypesFixture
} from '../fixtures';

export default (directory, 
  { 
    action = actionFixture, 
    actionTypes = actionTypesFixture, 
    actionTest =  actionTestFixture 
  }
) => {
  const folderPath = `${directory}/actions`;
  return createFolder(folderPath)
    .then(() => createAppendices(`${folderPath}/action-types.js`, actionTypes))
    .then(() => createFile(`${folderPath}/action.js`, action))
    .then(() => createFile(`${folderPath}/action.spec.js`, actionTest));
};