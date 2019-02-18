import mockfs from 'mock-fs';
import fs from 'fs';
import { createQuery, createMutation } from '../../src/creators';
import { queryFixture, mutationFixture } from '../../src/fixtures';

describe('create GraphQL templates', async () => {
  const parentPath = './src/foo-bar';
  const templatePath = `${parentPath}/graphql`;
  
  beforeEach(() => {  
    mockfs({
      [parentPath]: {}
    });
  });

  afterEach(() => {
    mockfs.restore();
  });

  describe('.createQuery/2', () => {
    it('creates a `graphql` folder in the given directory', (done) => {
      createQuery(parentPath, {})
        .then(() => {
          expect(
            fs.existsSync(templatePath)).toBe(true);
            done();
        });
    });

    it('creates a `queries` file in the `graphql` directory', (done) => {
      createQuery(parentPath, {})
        .then(() => {
          expect(
            fs.readFileSync(`${templatePath}/queries.js`, { encoding: 'utf8' })
          ).toEqual(queryFixture);
          done();
        });
    });
  });

  describe('.createMutation/2', () => {
    it('creates a `graphql` folder in the given directory', (done) => {
      createMutation(parentPath, {})
        .then(() => {
          expect(
            fs.existsSync(templatePath)).toBe(true);
            done();
        });
    });

    it('creates a `mutations` file in the `graphql` directory', (done) => {
      createMutation(parentPath, {})
        .then(() => {
          expect(
            fs.readFileSync(`${templatePath}/mutations.js`, { encoding: 'utf8' })
          ).toEqual(mutationFixture);
          done();
        });
    });
  });
});