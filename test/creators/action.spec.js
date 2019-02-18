import mockfs from 'mock-fs';
import fs from 'fs';
import { createAction } from '../../src/creators';
import { actionFixture, actionSpecFixture, actionTypesFixture } from '../../src/fixtures';

describe('.createAction/2', async () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/actions`;

  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates an `actions` folder in the given directory', (done) => {
    createAction(parentPath, {})
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates an `action` file in the `actions` directory', (done) => {
    createAction(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/action.js`, { encoding: 'utf8' })
        ).toEqual(actionFixture);
        done();
      });
  });

  it('creates an `action` test file', (done) => {
    createAction(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/action.spec.js`, { encoding: 'utf8' })
        ).toEqual(actionSpecFixture);
        done();
      });
  });

  it('creates or appends to an `action-types` file', (done) => {
    createAction(parentPath, {})
      .then(() => {
        expect(fs.existsSync(`${templatePath}/action-types.js`)).toBe(true);
        expect(
          fs.readFileSync(`${templatePath}/action-types.js`, { encoding: 'utf8' })
        ).toContain(actionTypesFixture);
        done();
      });
  });
});
