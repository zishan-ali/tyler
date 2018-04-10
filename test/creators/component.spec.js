import mockfs from 'mock-fs';
import fs from 'fs';
import { createComponent } from '../../src/creators';
import { componentFixture, componentTestFixture } from '../../src/fixtures';

describe('.createComponent/1', () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/components`;
  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates a `components` folder in the given directory', (done) => {
    createComponent(parentPath)
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates a `component` file in the `components` directory', (done) => {
    createComponent(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/Component.jsx`, { encoding: 'utf8' })
        ).toEqual(componentFixture);
        done();
      });
  });

  it('creates a corresponding test file', (done) => {
    createComponent(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/Component.spec.js`, { encoding: 'utf8' })
        ).toEqual(componentTestFixture);
        done();
      });
  });
});
