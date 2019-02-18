import { pascalCase } from '../../src/utils';

describe('.pascalCase/1', () => {
  const input = 'some input';
  const result = pascalCase(input);

  it('converts input to capitalized camel case', () => {
    expect(result).toEqual('SomeInput');
  });
});
