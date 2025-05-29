import { createSlice } from "@reduxjs/toolkit";
import darkBgInitialState from "./State";

const darkBgSlice = createSlice({
  name: "darkBg",
  initialState: darkBgInitialState,
  reducers: {
    display_dark_bg: (state) => {
      state.display = true;
    },
    hide_dark_bg: (state) => {
      state.display = false;
    },
  },
});

export default darkBgSlice.reducer;
export const { display_dark_bg, hide_dark_bg } = darkBgSlice.actions;
