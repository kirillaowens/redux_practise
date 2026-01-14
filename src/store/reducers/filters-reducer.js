import { SET_FILTER } from "../consts/filters-consts";

export const filter = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
