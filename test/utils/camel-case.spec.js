import { pascalCase } from '../../src/utils';

describe('.pascalCase/1', () => {
  const input = 'some input';

  it('converts input to capitalized camel case', () => {
    expect(pascalCase(input)).toEqual('SomeInput');
  });
});