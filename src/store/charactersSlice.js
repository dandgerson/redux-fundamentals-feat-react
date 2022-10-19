import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import endpoint from "./endpoint";

const t = {};

export const fetchCharactersFromAPI = createAsyncThunk(
  "characters/fetchCharacters",
  async (searchTerm) => {
    const response = await fetch(endpoint + "/search/" + searchTerm).then(
      (response) => response.json()
    );

    return response.characters;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchCharactersFromAPI.pending]: (state, action) => {
      console.log({ state, action });
      state.loading = true;
    },
  },
});
