import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Actions
import { addMessage } from "./MessageNav/redux/Slice";
import { displayDarkBg, hideDarkBg } from "./DarkBG/redux/Slice";
import { setIsAuthenticatedInProtectedRoute } from "./ProtectedRoute/redux/Slice";
// Components
import MessageNav from "./MessageNav/MessageNav";
import DarkBG from "./DarkBG/DarkBG";
import TwoStepButton from "./TwoStepButton/TwoStepButton";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import FormBuilderTest from "./FormBuilder/test/FormBuilderTest";
import FormBuilderTestWithManyInputs from "./FormBuilder/test/FormBuilderTestWithManyInputs";

export default function App() {
  const dsp = useDispatch();
  const [text, setText] = useState("");
  const [type, setType] = useState("info");
  const isAuthenticated = useSelector((state) => state.protected_route?.isAuthenticated);

  // Events
  const HChangeMessage = (e) => setText(e.target.value);
  const HChangeType = (e) => setType(e.target.value);
  const HAddMessage = () => text !== "" && type !== "" && dsp(addMessage({ type, text }));

  // Toggle dark background
  const toggleDarkBG = () => {
    dsp(displayDarkBg());
    setTimeout(() => dsp(hideDarkBg()), 3000); // Auto-hide after 3 seconds
  };

  // Handle confirmation action
  const handleConfirmAction = () => {
    dsp(
      addMessage({
        type: "info",
        text: "Action confirmed successfully!",
      })
    );
  };

  // Toggle authentication state for ProtectedRoute testing
  const toggleAuth = () => {
    dsp(setIsAuthenticatedInProtectedRoute(!isAuthenticated));
    dsp(
      addMessage({
        type: "info",
        text: `Authentication ${!isAuthenticated ? "enabled" : "disabled"}`,
      })
    );
  };

  return (
    <Router>
      <div>
        <h1>My First React App</h1>
        <p>React is a JavaScript library for building user interfaces.</p>

        <div id="add-message-nav">
          <input id="text" type="text" placeholder="Message...." value={text} onChange={HChangeMessage} />
          <select id="type" value={type} onChange={HChangeType}>
            <option value="">Select Type</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          <button onClick={HAddMessage}>Add Message</button>
          <button onClick={toggleDarkBG}>Toggle Dark Background</button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h2>TwoStepButton Test</h2>
          <TwoStepButton buttonText="Delete Item" confirmText="Confirm Delete" onConfirm={handleConfirmAction} timeout={5000} variant="danger" />
          <TwoStepButton buttonText="Save Changes" confirmText="Confirm Save" onConfirm={handleConfirmAction} variant="success" />
        </div>

        {/* Protected Route Test Section */}
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <h2>Protected Route Test</h2>
          <p>Current status: {isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
          <button
            onClick={toggleAuth}
            style={{
              backgroundColor: isAuthenticated ? "#f44336" : "#4CAF50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {isAuthenticated ? "Log Out" : "Log In"}
          </button>

          <div style={{ marginTop: "15px" }}>
            <nav>
              <ul style={{ display: "flex", gap: "15px", listStyle: "none", padding: 0 }}>
                <li>
                  <Link to="/" style={{ textDecoration: "none", color: "#0066cc" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/protected" style={{ textDecoration: "none", color: "#0066cc" }}>
                    Protected Page
                  </Link>
                </li>
                <li>
                  <Link to="/form-builder" style={{ textDecoration: "none", color: "#0066cc" }}>
                    Form Builder Test
                  </Link>
                </li>
                <li>
                  <Link to="/form-builder-many-inputs" style={{ textDecoration: "none", color: "#0066cc" }}>
                    Form Builder Many Inputs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div style={{ marginTop: "15px", padding: "15px", backgroundColor: "#302d2d", borderRadius: "4px" }}>
            <Routes>
              <Route path="/" element={<div>This is the public home page. Anyone can see this content.</div>} />
              <Route path="/login" element={<div>Login page</div>} />
              <Route
                path="/protected"
                element={
                  <ProtectedRoute>
                    <div>
                      <h3>Protected Content</h3>
                      <p>This content is only visible to authenticated users.</p>
                    </div>
                  </ProtectedRoute>
                }
              />
              <Route path="/form-builder" element={<FormBuilderTest />} />
              <Route path="/form-builder-many-inputs" element={<FormBuilderTestWithManyInputs />} />
            </Routes>
          </div>
        </div>

        <MessageNav />
        <DarkBG />
      </div>
    </Router>
  );
}
