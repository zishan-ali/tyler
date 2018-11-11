import {
  atomTemplate,
  moleculeTemplate,
  organismTemplate,
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

export default (type, directory, recipes) => {
  switch (type) {
    case 'atom':
      return Promise.all(atomTemplate(directory, recipes));
    case 'molecule':
      return Promise.all(moleculeTemplate(directory, recipes));
    case 'organism':
      return Promise.all(organismTemplate(directory, recipes));
    case 'component':
      return Promise.all(componentTemplate(directory, recipes));
    case 'container':
      return Promise.all(containerTemplate(directory, recipes));
    case 'action':
      return Promise.all(actionTemplate(directory, recipes));
    case 'selector':
      return Promise.all(selectorTemplate(directory, recipes));
    case 'reducer':
      return Promise.all(reducerTemplate(directory, recipes));
    case 'markdown':
      return Promise.all(markdownTemplate(directory, recipes));
    case 'story':
      return Promise.all(storyTemplate(directory, recipes));
    case 'query':
      return Promise.all(queryTemplate(directory, recipes));
    case 'mutation':
      return Promise.all(mutationTemplate(directory, recipes));
    default:
      return Promise.reject('Template does not exist');
  }
}