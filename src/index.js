import { createFolder, createTemplate } from './creators';
import { kebabCase } from './utils';

export const creator = (name, type, recipes) => {
  const kebabCaseName = name ? kebabCase(name) : '';

  let directory;

  switch (type) {
    case 'atom':
    case 'molecule':
    case 'apollo-organism':
    case 'redux-organism':
    case 'template':
      directory = `${process.cwd()}/${kebabCaseName}`;
      break;
    default:
      directory = process.cwd();
  }

  return createFolder(directory)
    .then(() => createTemplate(type, directory, recipes))
    .then(() => process.exit(0))
    .catch(err => {
      console.log(err);
      process.exitCode = 1;
    });
};
