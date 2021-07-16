import {
  createAsyncThunk,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const addTodo = createAction("todoList/addItem");
export const removeTodo = createAction("todoList/removeTodo");

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        data: ["Task A", "Task B"],
      };
      resolve(response);
    }, 5000);
  });
};

export const getTodoData = createAsyncThunk("todo/fetchTodo", async () => {
  console.log("Thunk Started ");
  const data = await getData().then((res) => res);
  console.log("Thunk Ended", data);
  return data;
});

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
    })
    .addCase(getTodoData.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.todoItems = [...state.todoItems, ...action.payload.data];
    });
});

export default reducer;
