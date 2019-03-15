import { LIST_ADD } from '../constants';
const initState = []

export default function list( state = initState, action ) {
  switch (action.type) {
    case LIST_ADD:
      return [
        ...state,
        ...[action.payload]
      ];
    default:
      return state
  }
}
