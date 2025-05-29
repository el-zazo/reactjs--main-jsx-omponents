import { createSlice } from "@reduxjs/toolkit";
import darkBgInitialState from "./State";

const darkBgSlice = createSlice({
  name: "darkBg",
  initialState: darkBgInitialState,
  reducers: {
    displayDarkBg: (state) => {
      state.display = true;
    },
    hideDarkBg: (state) => {
      state.display = false;
    },
  },
});

export default darkBgSlice.reducer;
export const { displayDarkBg, hideDarkBg } = darkBgSlice.actions;
