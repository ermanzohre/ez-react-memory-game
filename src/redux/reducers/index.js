import {CHANGE_NAME} from '../constants/action-types';

const initialState = {
  players: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    return {
      ...state,
      players: action.payload,
      
    };
  }
  return state;
}

export default rootReducer;
