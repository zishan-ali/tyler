import mockfs from 'mock-fs';
import fs from 'fs';
import { createSelector } from '../../src/creators';
import { selectorFixture, selectorSpecFixture } from '../../src/fixtures';

describe('.createSelector/2', async () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/selectors`;
  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates a `selectors` folder in the given directory', (done) => {
    createSelector(parentPath, {})
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates a `selector` file in the `selectors` directory', (done) => {
    createSelector(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/selector.js`, { encoding: 'utf8' })
        ).toEqual(selectorFixture);
        done();
      });
  });

  it('creates a corresponding test file', (done) => {
    createSelector(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/selector.spec.js`, { encoding: 'utf8' })
        ).toEqual(selectorSpecFixture);
        done();
      });
  });
});
