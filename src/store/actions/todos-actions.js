import { ADD, DELETE, RESET, TOGGLE } from "../consts/todos-consts";

export const addTodo = (title) => ({
  type: ADD,
  title,
});

export const deleteTodo = (id) => ({
  type: DELETE,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE,
  id,
});

export const resetList = () => ({
  type: RESET,
});