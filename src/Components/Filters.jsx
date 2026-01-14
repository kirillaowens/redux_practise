import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/actions/filters-actions";
import { selectActiveFilter } from "../store/selectors/filters-selectors";

function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter("all"))}
        style={{ color: activeFilter === "all" ? "red" : "black" }}
      >
        All todos
      </button>
      <button
        onClick={() => dispatch(setFilter("isDone"))}
        style={{ color: activeFilter === "isDone" ? "red" : "black" }}
      >
        Done todos
      </button>
      <button
        onClick={() => dispatch(setFilter("isActive"))}
        style={{ color: activeFilter === "isActive" ? "red" : "black" }}
      >
        Active todos
      </button>
    </div>
  );
}

export default Filters;
