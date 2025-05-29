import { useDispatch } from "react-redux";
import { useState } from "react";

// Actions
import { addMessage } from "./MessageNav/redux/Slice";
import { display_dark_bg, hide_dark_bg } from "./DarkBG/redux/Slice";

// styles
import "./App.css";

// components
import MessageNav from "./MessageNav/MessageNav";
import DarkBG from "./DarkBG/DarkBG";

export default function App() {
  const dsp = useDispatch();
  const [text, setText] = useState("");
  const [type, setType] = useState("info");

  // Events
  const HChangeMessage = (e) => setText(e.target.value);
  const HChangeType = (e) => setType(e.target.value);
  const HAddMessage = () => text !== "" && type !== "" && dsp(addMessage({ type, text }));

  // Toggle dark background
  const toggleDarkBG = () => {
    dsp(display_dark_bg());
    setTimeout(() => dsp(hide_dark_bg()), 3000); // Auto-hide after 3 seconds
  };

  return (
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

      <MessageNav />
      <DarkBG />
    </div>
  );
}
