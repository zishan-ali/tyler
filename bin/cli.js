#!/usr/bin/env node

import { prompt } from 'inquirer';
import meow from 'meow';
import fs from 'fs';
import globby from 'globby';
import os from 'os';
import path from 'path';

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

const home = os.homedir();

const findUp = (filename, dir = process.cwd()) => {
  if (dir.startsWith(home)) {
    const file = path.join(dir, filename);
    if (fs.existsSync(file)) {
      return file;
    }
    return findUp(filename, path.resolve(dir, '..'));
  }
  return '';
};

const isUpperCase = str => str === str.toUpperCase();
const hasFileExtensions = filename => filename.includes('.');
const stripFileExtensions = filename => filename.replace(/\.[^.]+$/, '');

const targetPath = findUp('.tylerrc');
const config = targetPath ? fs.readFileSync(targetPath, { encoding: 'utf8' }) : '{}';
const configContents = config && JSON.parse(config);

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
        const sanitizedFilename = isUpperCase(fileWithoutExtension) ? fileWithoutExtension.toLowerCase() : camelCase(fileWithoutExtension);
        data[sanitizedFilename] = result;
      }
    });

  return data;
};

const getCustomFixtures = () => {
  return globby
    .sync(['./**'], {
      absolute: true,
      cwd: customFixturesDirectory,
      excludeDirectories: true
    })
    .reduce((data, absolutePath) => {
      const result = fs.readFileSync(absolutePath, { encoding: 'utf8' });
      const file = path.relative(customFixturesDirectory, absolutePath);
      const fileWithoutExtension = hasFileExtensions(file) ? stripFileExtensions(file) : file;
      const sanitizedFilename = isUpperCase(fileWithoutExtension)
        ? fileWithoutExtension.toLowerCase()
        : camelCase(fileWithoutExtension);
      data[sanitizedFilename] = result;
      return data;
    }, {});
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
