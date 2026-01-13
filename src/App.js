import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const addToDo = () => {
    if (!title.trim()) return;

    dispatch({
      type: "ADD",
      title,
    });

    setTitle("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Введите задачу"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {todos.map((todo) => (
          <div className="todo" key={todo.id} style={{display: "flex"}}>
            <p className="title">{todo.title}</p>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => dispatch({ type: "TOGGLE", todoId: todo.id })}
            />
          </div>
        ))}
        <button onClick={addToDo}>Add</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </header>
    </div>
  );
}

export default App;
