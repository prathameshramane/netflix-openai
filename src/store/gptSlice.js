import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    enabled: false,
  },
  reducers: {
    changeGptState: (state, action) => {
      state.enabled = action.payload;
    },
  },
});

export const { changeGptState } = gptSlice.actions;
export default gptSlice.reducer;
