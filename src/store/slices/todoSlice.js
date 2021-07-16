import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { todoItems: ["Complete the homework"] };

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

export const fetchTodoData = createAsyncThunk("todo/fetchTodo", async () => {
  console.log("Thunk Started ");
  const data = await getData().then((res) => res);
  console.log("Thunk Ended", data);
  return data;
});

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state, action) {
      const { payload } = action;
      console.log(payload);
      state.todoItems.push(payload);
    },
    removeTodo(state, action) {
      console.log("Remove todo");
      state.todoItems = state.todoItems.filter(
        (item, index) => index !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoData.fulfilled, (state, action) => {
      // Add user to the state array
      state.todoItems = [...state.todoItems, ...action.payload.data];
    });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
