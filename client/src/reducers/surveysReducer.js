import { FETCH_SURVEYS, DELETE_SURVEYS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEYS:
      const newState = state.filter((x) => x._id !== action.payload._id)
      return newState;
    default:
      return state;
  }
}
