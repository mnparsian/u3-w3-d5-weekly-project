import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedTracks: []
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const trackId = action.payload;
      if (state.likedTracks.includes(trackId)) {
        state.likedTracks = state.likedTracks.filter((id) => id !== trackId);
      } else {
        state.likedTracks.push(trackId);
      }
    }
  }
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
