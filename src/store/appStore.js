import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptSlice,
  },
});

export default appStore;
