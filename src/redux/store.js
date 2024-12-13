import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slices/playerSlice";
import likesReducer from "./slices/likesSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    likes: likesReducer,
    search: searchSlice
  }
});

export default store;
