import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = (title) => ({
  id: nanoid(),
  title,
  isDone: false,
  assignee: "",
});

const initialState = [
  createTask("make LOL"),
  createTask("make WTF"),
  createTask("make OMG"),
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload.title));
    },
  },
});
