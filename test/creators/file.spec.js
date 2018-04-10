import mockfs from 'mock-fs';
import fs from 'fs';
import { createFile } from '../../src/creators';

describe('.createFile/2', () => {
  const targetFolder = './output';
  const targetPath = `${targetFolder}/foo.txt`;
  const targetContent = 'Some awesome\nString';

  describe('when the parent folder exists and is writeable', () => {
    beforeEach(() => {
      mockfs({
        [targetFolder]: {}
      });
    });

    afterEach(() => {
      mockfs.restore();
    });

    it('creates a file in the correct path', (done) => {
      createFile(targetPath, targetContent).then(() => {
        expect(fs.existsSync(targetPath)).toEqual(true);
        done();
      });
    });

    it('correctly sets the file contents', (done) => {
      createFile(targetPath, targetContent).then(() => {
        expect(
          fs.readFileSync(targetPath, { encoding: 'utf8'})
        ).toEqual(targetContent);
        done();
      });
    });
  });

  describe('when the parent folder does not exist', () => {
    beforeEach(() => {
      mockfs({});
    });

    afterEach(() => {
      mockfs.restore();
    });

    it('raises an appropriate error', (done) => {
      const expectedError = new Error(`ENOENT, no such file or directory '${targetPath}'`);
      createFile(targetPath, targetContent)
        .then(() => done())
        .catch((err) => {
          expect(err).toEqual(expectedError);
          done();
        });
    });
  });
});
