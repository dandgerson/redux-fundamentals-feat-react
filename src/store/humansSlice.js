import { createSlice, nanoid } from "@reduxjs/toolkit";

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
  add: (state, action) => state.push(createHuman(action.payload.name)),
});
