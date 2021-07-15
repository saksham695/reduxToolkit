import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import todoReducer from "./reduces/todoReduces";

const reducer = combineReducers({
  todoStore: todoReducer,
});
const store = configureStore({
  reducer,
});
export default store;
