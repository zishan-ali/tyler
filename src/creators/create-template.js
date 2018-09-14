import templates from '../templates';

const mapType = (type, directory) => {
  const renderTemplate = templates[`${type}Template`]

  return Promise.all(renderTemplate(directory))
}

export default (type, directory) => mapType(type, directory) || Promise.reject('Template does not exist');

