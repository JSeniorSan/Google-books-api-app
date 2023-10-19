import { configureStore } from "@reduxjs/toolkit";
import { BookSlice } from "./Books/BooksSlice";

export const store = configureStore({
  reducer: BookSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
