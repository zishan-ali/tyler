#!/usr/bin/env node

import { prompt } from 'inquirer';
import meow from 'meow';
import fs from 'fs';

import { creator } from '../src';
import { camelCase } from '../src/utils';
import { usageFixture } from './fixtures';
import { nameQuestion, templateQuestion } from './questions';

const { input: [template, ...inputName] } = meow(usageFixture);
const componentName = inputName.join(' ');

const nameAndTemplate = componentName && template;
const templateNoName = !componentName && template;
const noInput = !componentName && !template;

const requiresName = [
  'atom',
  'molecule',
  'apollo-organism',
  'redux-organism',
  'template',
  'react-app',
  'redux-app',
  'apollo-app'
].includes(template);

const targetPath = `${process.cwd()}/.tylerrc`;
const hasConfig = fs.existsSync(targetPath);
const config = hasConfig && fs.readFileSync(targetPath, { encoding: 'utf8' });
const configContents = JSON.parse(config);
const hasFileExtensions = filename => filename.includes('.');
const stripFileExtensions = filename => filename.split('.').slice(0, -1).join('.');

const { useCustomFixtures, customFixturesDirectory } = configContents;

let customFixtures = {};
const customFixturesDirectoryExists = fs.existsSync(customFixturesDirectory);

const readCustomFixtures = (directory, files) => {
  let data = {};

  files &&
    files.forEach(file => {
      if (fs.lstatSync(directory + '/' + file).isFile()) {
        const result = fs.readFileSync(directory + '/' + file, {
          encoding: 'utf8'
        });
        const fileWithoutExtension = hasFileExtensions(file) ? stripFileExtensions(file) : file;
        const sanitizedFilename = camelCase(fileWithoutExtension);
        data[sanitizedFilename] = result;
      }
    });

  return data;
};

const getCustomFixtures = () => {
  const allFiles = fs.readdirSync(customFixturesDirectory, {
    encoding: 'utf8'
  });
  return readCustomFixtures(customFixturesDirectory, allFiles);
};

if (useCustomFixtures && customFixturesDirectoryExists) {
  customFixtures = getCustomFixtures();
}

if (nameAndTemplate) {
  creator(componentName, template, customFixtures);
} else if (templateNoName && requiresName) {
  prompt(nameQuestion)
    .then(({ name }) => {
      creator(name, template, customFixtures);
    })
    .catch(err => {
      console.error(err);
    });
} else if (templateNoName && !requiresName) {
  creator(null, template, customFixtures);
} else if (noInput) {
  prompt([...templateQuestion, ...nameQuestion])
    .then(({ name, type }) => {
      creator(name, type, customFixtures);
    })
    .catch(err => {
      console.error(err);
    });
}
