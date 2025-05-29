// Message Nav
import MessageNav from "./src/MessageNav/MessageNav";
import messageNavReducer, { addMessage, removeMessage } from "./src/MessageNav/redux/Slice";

// Dark BG
import DarkBG from "./src/DarkBG/DarkBG";
import darkBgReducer, { displayDarkBg, hideDarkBg } from "./src/DarkBG/redux/Slice";

// Two Step Button
import TwoStepButton from "./src/TwoStepButton/TwoStepButton";

// Looding Page
import LoodingPage from "./src/LoodingPage/LoodingPage";

// Not Found Page
import NotFoundPage from "./src/NotFoundPage/NotFoundPage";

// Protected Route
import ProtectedRoute from "./src/ProtectedRoute/ProtectedRoute";
import protectedRouteReducer, { setIsAuthenticatedInProtectedRoute } from "./src/ProtectedRoute/redux/Slice";

// Form Builder
import FormBuilder from "./src/FormBuilder/FormBuilder";

export {
  // Message Nav
  MessageNav,
  messageNavReducer,
  addMessage,
  removeMessage,

  // Dark BG
  DarkBG,
  darkBgReducer,
  displayDarkBg,
  hideDarkBg,

  // Two Step Button
  TwoStepButton,

  // Looding Page
  LoodingPage,

  // Not Found Page
  NotFoundPage,

  // Protected Route
  ProtectedRoute,
  protectedRouteReducer,
  setIsAuthenticatedInProtectedRoute,

  // Form Builder
  FormBuilder,
};
