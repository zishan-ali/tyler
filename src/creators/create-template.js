import {
  atomTemplate,
  moleculeTemplate,
  organismTemplate,
  pageTemplate,
  componentTemplate,
  containerTemplate,
  actionTemplate,
  selectorTemplate,
  reducerTemplate,
  markdownTemplate,
  storyTemplate,
  queryTemplate,
  mutationTemplate
} from '../templates';

export default (type, directory) => {
  switch (type) {
    case 'atom':
      return Promise.all(atomTemplate(directory));
    case 'molecule':
      return Promise.all(moleculeTemplate(directory));
    case 'organism':
      return Promise.all(organismTemplate(directory));
    case 'page':
      return Promise.all(pageTemplate(directory));
    case 'component':
      return Promise.all(componentTemplate(directory));
    case 'container':
      return Promise.all(containerTemplate(directory));
    case 'action':
      return Promise.all(actionTemplate(directory));
    case 'selector':
      return Promise.all(selectorTemplate(directory));
    case 'reducer':
      return Promise.all(reducerTemplate(directory));
    case 'markdown':
      return Promise.all(markdownTemplate(directory));
    case 'story':
      return Promise.all(storyTemplate(directory));
    case 'query':
      return Promise.all(queryTemplate(directory));
    case 'mutation':
      return Promise.all(mutationTemplate(directory));
    default:
      return Promise.reject('Template does not exist');
  }
}