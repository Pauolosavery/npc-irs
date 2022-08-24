/* eslint-disable default-param-last */
import { GET_OBJECT, ERROR_ORDER } from '../actionTypes/objectAT';

const objectReducer = (state = {
  objects: [],
}, action) => {
  switch (action.type) {
    case GET_OBJECT: {
      return { ...state, objects: action.payload };
    }
    case ERROR_ORDER:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};

export default objectReducer;
