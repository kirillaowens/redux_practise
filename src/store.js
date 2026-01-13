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
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);

    case "RESET":
      return [];

    default:
      return state;
  }
};

export const addTodo = (title) => ({
  type: "ADD",
  title,
});

export const deleteTodo = (id) => ({
  type: "DELETE",
  id,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE",
  id,
});

export const resetList = () => ({
  type: "RESET",
});

const store = createStore(reducer);
export default store;
