import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeComponent: "albums"
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    }
  }
});

export const { setActiveComponent } = uiSlice.actions;
export default uiSlice.reducer;
