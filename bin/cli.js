#!/usr/bin/env babel-node --

import { prompt } from 'inquirer';
import meow from 'meow';
import { creator } from '../src';
import { usageFixture } from './fixtures';

const templates = [
  'atom',
  'molecule',
  'organism',
  'page',
  'component',
  'container',
  'action',
  'selector',
  'reducer',
  'markdown',
  'story',
  'query',
  'mutation'
];

const templateQuestion = [{
  type: 'list',
  name: 'type',
  message: 'Whatchu wanna create?',
  choices: templates
}];

const nameQuestion = [{
  type: 'input',
  name: 'name',
  message: 'Name:'
}];

const { input: [template, ...inputName] } = meow(usageFixture);
const componentName = inputName.join(' ');

if (template) {
  if (componentName) {
    creator(componentName, template);
  }
  prompt(nameQuestion)
    .then(({ name }) => {
      creator(name, template);
    });
} else if (componentName) {
  prompt(templateQuestion)
    .then(({ type }) => {
      creator(componentName, type);
    });
} else {
  prompt([...templateQuestion, ...nameQuestion])
    .then(({ name, type }) => {
      creator(name, type);
    });
}
