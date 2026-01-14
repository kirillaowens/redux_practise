import React from "react";
import { useSelector } from "react-redux";

function ProgressBar() {
  const { completed, total } = useSelector((state) => {
    const todos = state.todos;
    const completed = todos.reduce(
      (sum, todo) => sum + (todo.isCompleted ? 1 : 0),
      0
    );

    return {
      completed,
      total: todos.length,
    };
  });

  const percent = total === 0 ? 0 : ((completed / total) * 100).toFixed(1);

  return <div>{percent}%</div>;
}

export default ProgressBar;
