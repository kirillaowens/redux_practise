import { legacy_createStore as createStore } from "redux";

const loadTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const initialState = loadTodos();

let nextToDoId = initialState.length
  ? Math.max(...initialState.map((todo) => todo.id))
  : 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          title: action.title,
          id: ++nextToDoId,
          isCompleted: false,
        },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case "RESET":
      return [];

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
