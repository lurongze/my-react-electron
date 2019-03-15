import { COUNTER_ADD, COUNTER_MINUS } from '../constants';
const initState = {
  num: 0
}

export default function counter(state = initState, action) {
  switch (action.type) {
    case COUNTER_ADD:
      return {
        ...state,
        ...{
          num: state.num + 1
        }
      };
    case COUNTER_MINUS:
      return {
        ...state,
        ...{
          num: state.num - 1
        }
      };
    default:
      return state;
  }
}
