import { combineReducers } from "redux";
import { todos } from "./todos-reducer";
import { filter } from "./filters-reducer";

export const rootReducer = combineReducers({ todos, filter });
