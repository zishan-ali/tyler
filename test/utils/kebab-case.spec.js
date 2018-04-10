import { kebabCase } from '../../src/utils';

describe('.kebabCase/1', () => {
  const input = 'some input';

  it('converts input to dash case', () => {
    expect(kebabCase(input)).toEqual('some-input');
  });
});
