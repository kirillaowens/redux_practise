import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/todos-actions";
import { selectFilteredTodos } from "../store/selectors/todos-selectors";
import { selectActiveFilter } from "../store/selectors/filters-selectors";


function ToDoList() {
  const filter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectFilteredTodos(state, filter));
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="ToDoList">
      {todos.map((todo) => (
        <div className="todo" key={todo.id} style={{ display: "flex" }}>
          <p className="title">{todo.title}</p>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
