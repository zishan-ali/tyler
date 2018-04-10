import mockfs from 'mock-fs';
import fs from 'fs';
import { createReducer } from '../../src/creators';
import { reducerFixture, reducerTestFixture } from '../../src/fixtures';

describe('.createReducer/1', () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/reducers`;
  beforeEach(() => {
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  it('creates a `reducers` folder in the given directory', (done) => {
    createReducer(parentPath)
      .then(() => {
        expect(
          fs.existsSync(templatePath)).toBe(true);
          done();
      });
  });

  it('creates a `reducer` file in the `reducers` directory', (done) => {
    createReducer(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/reducer.js`, { encoding: 'utf8' })
        ).toEqual(reducerFixture);
        done();
      });
  });

  it('creates a corresponding test file', (done) => {
    createReducer(parentPath)
      .then(() => {
        expect(
          fs.readFileSync(`${templatePath}/reducer.spec.js`, { encoding: 'utf8' })
        ).toEqual(reducerTestFixture);
        done();
      });
  });
});
