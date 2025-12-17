import { legacy_createStore as createStore } from "redux";

const initialState = 0;

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return (state += 1);
  }
  return state;
};

const store = createStore(reducer);

export default store;
