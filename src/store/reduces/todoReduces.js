import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTodo = createAction("todoList/addItem");
export const removeTodo = createAction("todoList/removeTodo");
// const decrement = createAction("counter/decrement");
// const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { todoItems: ["Complete the homework"] };

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const { payload } = action;
      console.log(payload);
      console.log(JSON.stringify(state));
      state.todoItems.push(payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.todoItems = state.todoItems.filter(
        (item, index) => index !== action.payload
      );
    });
  // .addCase(incrementByAmount, (state, action) => {
  //   state.value += action.payload;
  // });
});

export default reducer;
