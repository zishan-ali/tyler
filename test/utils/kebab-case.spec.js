import { kebabCase } from '../../src/utils';

describe('.kebabCase/1', () => {
  const input = 'some input';
  const result = kebabCase(input);

  it('converts input to dash case', () => {
    expect(result).toEqual('some-input');
  });
});
