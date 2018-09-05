import { ACTION_TYPE } from '../actions/action-types';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE:
      return action.data;
    default:
      return state;
  }
};
