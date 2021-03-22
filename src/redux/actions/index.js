import {CHANGE_NAME} from '../constants/action-types';
import store from '../store';
// export function changeName(payload) {
//   return {type: CHANGE_NAME, payload};
// }
export function changeName(payload) {

  const player = store.getState().players;

  return {
    type: CHANGE_NAME,
    payload: [...player, {name: payload}],
  };

}

export function changeScore(payload) {

  const player = store.getState().players;

  player[player.length - 1].score = payload;

  return {type: CHANGE_NAME, payload: player};
  
}
