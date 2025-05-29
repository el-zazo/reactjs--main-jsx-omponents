import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import "./MessageNav.css";

// Components
import Message from "./components/Message/Message";

export default function MessageNav() {
  const messages = useSelector((st) => st.message_nav?.messages || []);

  return (
    <div id="message-nav">
      <AnimatePresence>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </AnimatePresence>
    </div>
  );
}
