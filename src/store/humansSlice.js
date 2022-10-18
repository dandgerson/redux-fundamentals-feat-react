import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: [],
});

const initialState = [
  createHuman("Lol"),
  createHuman("Wtf"),
  createHuman("Omg"),
];

export const humansSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload.name));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignToHuman, (state, action) => {
      console.log({ state });
      state.forEach((human) => {
        if (human.id === action.payload.humanId) {
          !human.taskIds.includes(action.payload.taskId) &&
            human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds.filter((id) => id !== action.payload.taskId);
        }
      });
    });
  },
});
