import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fakeData = {
  dogFacts: ["wtf", "lol", "kek"],
};

const fetchFakeDogFacts = (numberOfDogFacts) => {
  return Promise.resolve(fakeData.dogFacts).then((facts) =>
    facts.slice(0, numberOfDogFacts)
  );
};

export const fetchDogFactsFromAPI = createAsyncThunk(
  "dogFacts/fetchDogFacts",
  async (numberOfDogFacts) => {
    const facts = fetchFakeDogFacts(numberOfDogFacts);

    return facts;
  }
);

export const dogFactsSlice = createSlice({
  name: "dogFacts",
  initialState: {
    facts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchDogFactsFromAPI.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDogFactsFromAPI.fulfilled]: (state, action) => {
      state.facts = action.payload;
      state.loading = false;
    },
  },
});
