import mockfs from 'mock-fs';
import fs from 'fs';
import { createContainer } from '../../src/creators';
import { containerFixture, containerSpecFixture } from '../../src/fixtures';

describe('.createContainer/2', async () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/containers`;
  
  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates a `containers` folder in the given directory', (done) => {
    createContainer(parentPath, {})
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates a `containers` file in the `containers` directory', (done) => {
    createContainer(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/Container.jsx`, { encoding: 'utf8' })
        ).toEqual(containerFixture);
        done();
      });
  });

  it('creates a corresponding test file', (done) => {
    createContainer(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/Container.spec.js`, { encoding: 'utf8' })
        ).toEqual(containerSpecFixture);
        done();
      });
  });
});
