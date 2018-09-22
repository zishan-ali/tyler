import {
  atomTemplate,
  moleculeTemplate,
  apolloOrganismTemplate,
  reduxOrganismTemplate,
  componentTemplate,
  apolloContainerTemplate,
  reduxContainerTemplate,
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
    case 'apollo-organism':
      return Promise.all(apolloOrganismTemplate(directory));
    case 'redux-organism':
      return Promise.all(reduxOrganismTemplate(directory));
    case 'component':
      return Promise.all(componentTemplate(directory));
    case 'apollo-container':
      return Promise.all(apolloContainerTemplate(directory));
    case 'redux-container':
      return Promise.all(reduxContainerTemplate(directory));
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