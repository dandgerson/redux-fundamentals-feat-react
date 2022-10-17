import { configureStore } from "@reduxjs/toolkit";
import { humansSlice } from "./humansSlice";
import { tasksSlice } from "./tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humansSlice.reducer,
  },
});

export default store;
