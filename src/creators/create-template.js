import {
  atomTemplate,
  moleculeTemplate,
  apolloOrganismTemplate,
  reduxOrganismTemplate,
  componentTemplate,
  containerTemplate,
  actionTemplate,
  selectorTemplate,
  reducerTemplate,
  markdownTemplate,
  storyTemplate,
  queryTemplate,
  mutationTemplate,
  templateTemplate,
  reactAppTemplate,
  apolloAppTemplate,
  reduxAppTemplate
} from '../templates';

export default (type, directory, recipes) => {
  switch (type) {
    case 'atom':
      return Promise.all(atomTemplate(directory, recipes));
    case 'molecule':
      return Promise.all(moleculeTemplate(directory, recipes));
    case 'apollo-organism':
      return Promise.all(apolloOrganismTemplate(directory, recipes));
    case 'redux-organism':
      return Promise.all(reduxOrganismTemplate(directory, recipes));
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
    case 'template':
      return Promise.all(templateTemplate(directory, recipes));
    case 'react-app':
      return Promise.all(reactAppTemplate(directory, recipes));
    case 'apollo-app':
      return Promise.all(apolloAppTemplate(directory, recipes));
    case 'redux-app':
      return Promise.all(reduxAppTemplate(directory, recipes));
    default:
      return Promise.reject('Template does not exist');
  }
};
