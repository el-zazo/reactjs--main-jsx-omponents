import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";

// Components
import App from "./App";
// import NotFoundPage from "./NotFoundPage/NotFoundPage";
// import LoodingPage from "./LoodingPage/LoodingPage";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    {/* <NotFoundPage /> */}
    {/* <LoodingPage /> */}
  </Provider>
);
