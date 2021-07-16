import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import todoReducer from "./reduces/todoReduces";
import todoSlice from "./slices/todoSlice";

const reducer = combineReducers({
  todoStore: todoReducer,
  todoSlice: todoSlice,
});
const store = configureStore({
  reducer,
});
export default store;
