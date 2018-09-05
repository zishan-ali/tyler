#!/usr/bin/env node

import { prompt } from 'inquirer';
import meow from 'meow';

import { creator } from '../src';

import { usageFixture } from './fixtures';
import { nameQuestion, templateQuestion } from './questions';

const { input: [template, ...inputName] } = meow(usageFixture);
const componentName = inputName.join(' ');

const nameAndTemplate = componentName && template;
const nameNoTemplate = componentName && !template;
const templateNoName = !componentName && template;
const noInput = !componentName && !template;

if (nameAndTemplate) {
  creator(componentName, template);
} else if (nameNoTemplate) {
  prompt(templateQuestion)
    .then(({ type }) => {
      creator(componentName, type);
    })
    .catch(err => {
      console.error(err);
    });
} else if (templateNoName) {
  prompt(nameQuestion)
    .then(({ name }) => {
      creator(name, template);
    })
    .catch(err => {
      console.error(err);
    });
} else if (noInput) {
  prompt([...templateQuestion, ...nameQuestion])
  .then(({ name, type }) => {
    creator(name, type);
  })
  .catch(err => {
    console.error(err);
  });
}
