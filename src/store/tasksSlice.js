import { createAction, createSlice, nanoid } from "@reduxjs/toolkit";

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
    toggle: (state, action) => {
      const task = state.find((tasks) => tasks.id === action.payload.id);
      task.isDone = action.payload.isDone;
    },
    assignToHuman: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignee = action.payload.humanId;
    },
  },
});

export const toggleTask = createAction("tasks/toggle", (id, isDone) => ({
  payload: { id, isDone },
}));
