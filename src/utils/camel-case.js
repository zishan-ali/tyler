import { pascalCase } from './';

export default (string) => (
  pascalCase(string).replace(/^\w/, character => character.toLowerCase())
);
