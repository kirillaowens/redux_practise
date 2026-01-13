import { legacy_createStore as createStore } from "redux";

const initialState = [];
let nextToDoId = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { title: action.title, id: ++nextToDoId, isCompleted: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const addToDo = (title) => {
  return {
    type: "ADD",
    title,
  };
};

export const toggleToDo = (todoId) => {
  return {
    type: "TOGGLE",
    todoId,
  };
};

const store = createStore(reducer);

export default store;
