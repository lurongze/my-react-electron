import { COUNTER_ADD, COUNTER_MINUS } from '../constants';

export const add = () => {
  return {
    type: COUNTER_ADD
  }
}

export const minus = () => {
  return {
    type: COUNTER_MINUS
  }
}

