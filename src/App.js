import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>

        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </header>
    </div>
  );
}

export default App;
