import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./charactersSlice";
import { dogFactsSlice } from "./dogFactsSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    dogFacts: dogFactsSlice.reducer,
  },
});
