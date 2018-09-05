import { ACTION_TYPE } from '../actions/action-types';
import reducer from './reducer';

test('initial state is empty object', () => {
  expect(reducer()).toEqual({});
});

test('ACTION_TYPE adds data to the state', () => {
  const data = {
    foo: 'bar'
  };

  const action = {
    type: ACTION_TYPE,
    data
  };

  const state = reducer({}, action);

  expect(state).toBe(data);
});
