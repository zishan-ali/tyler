import { pascalCase } from './';

export default (string = '') => (
  pascalCase(string).split(/(?=[A-Z])/).join('-').toLowerCase()
);
