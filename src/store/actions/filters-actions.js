import { SET_FILTER } from "../consts/filters-consts"

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
})