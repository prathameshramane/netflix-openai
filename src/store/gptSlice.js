import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    enabled: false,
    gptResults: null,
    recommendedMovies: null,
  },
  reducers: {
    changeGptState: (state, action) => {
      state.enabled = action.payload;
    },
    addGptResults: (state, action) => {
      state.gptResults = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { changeGptState, addGptResults, addRecommendedMovies } = gptSlice.actions;
export default gptSlice.reducer;
