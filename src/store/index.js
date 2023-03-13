import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoList";
import { api } from "../api/apiSlice";

export default configureStore({
  reducer: {
    [todoListSlice.name]: todoListSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
