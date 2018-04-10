import mockfs from 'mock-fs';
import fs from 'fs';
import { createStory } from '../../src/creators';
import { storyFixture } from '../../src/fixtures';

describe('.createStory/1', () => {
  const parentPath = 'foo-bar';
  it('creates an `story` file in the given directory', (done) => {
    createStory(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${parentPath}/story.js`, { encoding: 'utf8' })
        ).toEqual(storyFixture);
        done();
      });
  });
});
