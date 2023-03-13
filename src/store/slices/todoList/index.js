import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    list: [],
  },
  reducers: {
    setTodoList: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    deleteTaskFromList: (state, action) => {
      const filterData = state.list.filter((task) => {
        return task.id !== action.payload;
      });
      state.list = filterData;
    },
    updateTodoList: (state, action) => {
      const tasks = state.list.map((task) => {
        if (task.id === action.payload.id) {
          task.checked = action.payload.checked;
        }
        return task;
      });
      state.list = tasks;
    },
  },
});

export const { setTodoList, deleteTaskFromList, updateTodoList } =
  todoListSlice.actions;
export default todoListSlice;
