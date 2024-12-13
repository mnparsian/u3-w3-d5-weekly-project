import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedTracks: []
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const track = action.payload; // کل اطلاعات آهنگ
      const exists = state.likedTracks.find((t) => t.id === track.id);

      if (exists) {
        state.likedTracks = state.likedTracks.filter((t) => t.id !== track.id);
      } else {
        state.likedTracks.push(track);
      }
    }
  }
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
