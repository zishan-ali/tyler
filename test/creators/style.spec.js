import mockfs from 'mock-fs';
import fs from 'fs';
import { createStyle } from '../../src/creators';
import { styleFixture } from '../../src/fixtures';

describe('.createComponent/1', async () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/styles`;
  
  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates a `styles` folder in the given directory', (done) => {
    createStyle(parentPath)
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates a `styles` file in the `styles` directory', (done) => {
    createStyle(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/style.scss`, { encoding: 'utf8' })
        ).toEqual(styleFixture);
        done();
      });
  });
});
