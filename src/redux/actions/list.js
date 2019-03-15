import { LIST_ADD } from '../constants';
export const add = (payload) => {
  return {
    type: LIST_ADD,
    payload
  }
}

export function asyncAdd(payload) {
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(add(payload));
    }, 3000)
  }
}
