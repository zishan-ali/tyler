import mockfs from 'mock-fs';
import fs from 'fs';
import { createMarkdown } from '../../src/creators';
import { readMeFixture } from '../../src/fixtures';

describe('.createMarkdown/2', async () => {
  const parentPath = './src/foo-bar';

  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });
  
  it('creates an `readme` file in the given directory', (done) => {
    createMarkdown(parentPath, {})
      .then(() => {
        expect(
          fs.readFileSync(`${parentPath}/README.md`, { encoding: 'utf8' })
        ).toEqual(readMeFixture);
        done();
      });
  });
});
