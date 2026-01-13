import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, resetList } from "../store";

function ToDo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  return (
    <div className="ToDo">
      <input
        type="text"
        placeholder="new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) return;
          dispatch(addTodo(title));
          setTitle("");
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(resetList())}>Reset</button>
    </div>
  );
}

export default ToDo;
