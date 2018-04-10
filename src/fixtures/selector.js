import { kebabCase } from '../utils';

export const selector =
`import { createSelector } from 'reselect';

const selector = (state = {}) => state.value;

export default createSelector(selector, value => value);\n`;

export const test =
`import selector from './selector';

test('returns undefined when state is empty object', () => {
  const state = {};
  const result = selector(state);
  expect(result).toEqual(undefined);
});

test('selects', () => {
  const state = {
    value: 'foo'
  };
  const result = selector(state);
  expect(result).toEqual('foo');
});\n`;