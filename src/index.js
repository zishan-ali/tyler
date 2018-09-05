import { createFolder, createTemplate } from './creators';
import { kebabCase } from './utils';

export const creator = (name, type, config = {}) => {
  const kebabCaseName = kebabCase(name);

  const atomConfig = {
    atomBasePath: config.createAtomPath,
    atomFixture: config.createAtomFixture
  };

  const moleculeConfig = {
    moleculeBasePath: config.createMoleculePath,
    moleculeFixture: config.createMoleculeFixture
  };

  const organismConfig = {
    organismBasePath: config.createOrganismPath,
    organismFixture: config.createOrganismFixture
  };

  let directory;
  let fixture;

  switch(type) {
    case 'atom':
      directory = `${atomConfig.createAtomPath}/${kebabCaseName}`;
      fixture = atomConfig.createAtomFixture;
      break;
    case 'molecule':
      directory = `${moleculeBasePath}/${kebabCaseName}`;
      fixture = moleculeConfig.createMoleculeFixture;
      break;
    case 'organism':
      directory = `${organismBasePath}/${kebabCaseName}`
      fixture = organismConfig.createOrganismFixture;
      break;
    default:
      directory = process.cwd();
  }

  return createFolder(directory)
    .then(() => createTemplate(type, directory))
    .then(() => process.exit(0))
    .catch((err) => {
      console.log(err);
      process.exitCode = 1
    }
  );
};