import mockfs from 'mock-fs';
import fs from 'fs';
import { createFolder } from '../../src/creators';

describe('.createFolder/1', async () => {
  const parentPath = './output';
  const targetPath = './output/target';

  describe('when the parent folder exists and is writeable', () => {
    beforeEach(() => {
      mockfs({
        [parentPath]: mockfs.directory({
          mode: '0755'
        })
      });
    });

    afterEach(() => {
      mockfs.restore();
    });

    it('creates a folder at the provided path', (done) => {
      createFolder(targetPath)
        .then(() => {
          expect(fs.existsSync(targetPath)).toEqual(true);
          done();
        });
    });
  });

  describe('when the parent folder exists and is not writeable', () => {
    beforeEach(() => {
      mockfs({
        [parentPath]: mockfs.directory({
          mode: '0155'
        })
      });
    });

    afterEach(() => {
      mockfs.restore();
    });

    it('creates a folder at the provided path', (done) => {
      const expectedError = new Error(`EACCES, permission denied '${targetPath}'`);
      createFolder(targetPath)
        .then(done)
        .catch((err) => {
          expect(err).toEqual(expectedError);
          done();
        });
    });
  });
});
