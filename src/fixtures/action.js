export const action = `import { ACTION_TYPE } from './action-types';

const action = data => ({
  type: ACTION_TYPE,
  data
});

export default action;\n`;

export const test = `import { ACTION_TYPE } from './action-types';
import action from './action';

test('creates action', () => {
  const mockAction = action(true);
  expect(mockAction).toEqual({
    type: ACTION_TYPE,
    data: true
  });
});\n`;

export const actionTypes = `export const ACTION_TYPE = 'ACTION_TYPE';`;
