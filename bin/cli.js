#!/usr/bin/env node

import { prompt } from 'inquirer';
import meow from 'meow';
import fs from 'fs';

import { creator } from '../src';

import { usageFixture } from './fixtures';
import { nameQuestion, templateQuestion } from './questions';

const { input: [template, ...inputName] } = meow(usageFixture);
const componentName = inputName.join(' ');

const targetPath = `${process.cwd()}/.tylerrc`;
const hasConfig = fs.existsSync(targetPath);
const config = hasConfig && fs.readFileSync(targetPath, { encoding: 'utf8' });
const configContents = JSON.parse(config);

const nameAndTemplate = componentName && template;
const nameNoTemplate = componentName && !template;
const templateNoName = !componentName && template;
const noInput = !componentName && !template;

const isAtomicTemplate = template => {
  switch(template) {
    case 'atom':
    case 'molecule':
    case 'organism':
      return true;
    default:
      return false;
  }
}

console.log(hasConfig, configContents);

if (nameAndTemplate) {
  creator(componentName, template, configContents);
} else if (nameNoTemplate) {
  prompt(templateQuestion)
    .then(({ type }) => {
      creator(componentName, type, configContents);
    })
    .catch(err => {
      console.error(err);
    });  
} else if (templateNoName) {
  if (!isAtomicTemplate(template)) {
    creator(undefined, template, configContents);
  } else {
    prompt(nameQuestion)
      .then(({ name }) => {
        creator(name, template, configContents);
      })
      .catch(err => {
        console.error(err);
      });
  }
} else if (noInput) {
  prompt([...templateQuestion, ...nameQuestion])
  .then(({ name, type }) => {
    creator(name, type, configContents);
  })
  .catch(err => {
    console.error(err);
  });
}
