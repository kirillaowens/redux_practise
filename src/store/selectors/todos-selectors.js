export const selectAllTodos = (state) => state.todos;

export const selectFilteredTodos = (state, filter) => {
  switch (filter) {
    case "isDone":
      return state.todos.filter((todo) => todo.isCompleted);
    case "isActive":
      return state.todos.filter((todo) => !todo.isCompleted);
    default:
      return state.todos;
  }
};
