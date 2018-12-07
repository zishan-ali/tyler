import { camelCase } from '../../src/utils';

describe('.camelCase/1', () => {
  const input = 'some input-string';
  const result = camelCase(input);

  it('converts input to camel case', () => {
    expect(result).toEqual('someInputString');
  });
});
