import { configureStore } from "@reduxjs/toolkit";

// Slices
import messageNavReducer from "./MessageNav/redux/Slice";
import darkBgReducer from "./DarkBG/redux/Slice";
import protectedRouteReducer from "./ProtectedRoute/redux/Slice";

const Store = configureStore({
  reducer: {
    message_nav: messageNavReducer,
    dark_bg: darkBgReducer,
    protected_route: protectedRouteReducer,
  },
});

export default Store;
