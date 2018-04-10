import mockfs from 'mock-fs';
import fs from 'fs';
import { createAppendices } from '../../src/creators';

describe('.createAppendices/2', async () => {
  const targetFolder = './doo';
  const targetPath = `${targetFolder}/foo.txt`;
  const targetContent = 'Some file contents';

  describe('when the parent folder exists and is writeable', () => {
    beforeAll(() => {
      mockfs({
        [targetFolder]: mockfs.directory({
          mode: '0755'
        })
      });
    });

    afterAll(() => {
      mockfs.restore();
    })

    describe('and the path does not already exist', () => {
      it('creates a file in the correct path', done => {
        createAppendices(targetPath, targetContent).then(() => {
          expect(fs.existsSync(targetPath)).toEqual(true);
          done();
        });
      });
    
      it('correctly sets the file contents', done => {
        expect(
          fs.readFileSync(targetPath, { encoding: 'utf8'})
        ).toEqual(`${targetContent}\n`);
        done();
      });
    });

    describe('and the path does already exist', () => {    
      it('correctly appends to the file contents', done => {
        const additionalContent = 'foo';
        const expectedContent = `${targetContent}\n${additionalContent}\n`;
        createAppendices(targetPath, additionalContent).then(() => {
          expect(
            fs.readFileSync(targetPath, { encoding: 'utf8'})
          ).toEqual(expectedContent);
          done();
        });
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

    it('raises an appropriate error', done => {
      const expectedError = new Error(`ENOENT, no such file or directory '${targetPath}'`);
      createAppendices(targetPath, targetContent)
        .then(() => done())
        .catch((err) => {
          expect(err).toEqual(expectedError);
          done();
        });
    });
  });
});
