import { createFolder, createTemplate } from './creators';
import { kebabCase } from './utils';

export const creator = (name, type) => {
  const kebabCaseName = kebabCase(name);

  let directory;

  switch (type) {
    case 'atom':
    case 'molecule':
    case 'organism':
    case 'page':
      directory = `${process.cwd()}/${kebabCaseName}`;
      break;
    default:
      directory = process.cwd();
  }

  return createFolder(directory)
    .then(() => createTemplate(type, directory))
    .then(() => process.exit())
    .catch(err => {
      console.log(err);
      process.exit();
    });
};
