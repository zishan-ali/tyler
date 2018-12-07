import * as templates from '../templates';
import { camelCase } from '../utils';

export default (type, directory, recipes) => {
  const renderTemplate = templates[`${camelCase(type)}Template`];

  if (renderTemplate) {
    return Promise.all(renderTemplate(directory, recipes));
  } else {
    return Promise.reject(`Template does not exist "${type}"`);
  }
};
