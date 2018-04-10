import mockfs from 'mock-fs';
import fs from 'fs';
import { creator } from '../src';

describe('.creator/2', () => {
  const name = 'foo bar';
  const atomicType = 'atom';

  const incorrectType = 'baz';
  const nonAtomicType = 'action';
  const nonAtomicTypeDirectory = 'actions';

  it('creates folder in the current directory', () => {
    creator(name, nonAtomicType)
      .then(() => {
        expect(fs.existsSync(nonAtomicTypeDirectory)).toEqual(true);
        done();
      })
  });

  it('creates folder based off name input for atomic modules', () => {
    creator(name, atomicType)
      .then(() => {
        expect(fs.existsSync(name)).toEqual(true);
        done();
      })
  });

  it('sub-folder is cased appropriately', () => {
    creator(name, atomicType)
      .then(() => {
        expect(fs.existsSync('foo-bar')).toEqual(true);
        done();
      })
  });

  it('raises an appropriate error when type doesn\'t exist', () => {
    creator(name, incorrectType)
      .then(() => {
        expect(fs.existsSync(incorrectType)).toEqual(false);
        expect(fs.existsSync(name)).toEqual(false);
      })
      .catch((err) => {
        expect(err).toEqual({});
      });
  });
});