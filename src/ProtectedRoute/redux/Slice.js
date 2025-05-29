import { createSlice } from "@reduxjs/toolkit";
import initialState from "./State";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticatedInProtectedRoute: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
});

export default authSlice.reducer;
export const { setIsAuthenticatedInProtectedRoute } = authSlice.actions;
