import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import "./Message.css";

// Actions
import { removeMessage } from "../../redux/Slice";

// Components
import BtnClose from "../BtnClose/BtnClose";
import Icon from "../Icon/Icon";

export default function Message({ message }) {
  const dsp = useDispatch();

  // Prepare message type
  const type = message.type.toLowerCase();

  // Delete Message After 5 Second
  useEffect(() => {
    const timeout = setTimeout(() => {
      dsp(removeMessage(message.id));
    }, 10000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className={`message ${type}`} key={message.id}>
      <Icon type={type} />
      <span className="text">{message.text}</span>
      <BtnClose message_id={message.id} />
    </motion.div>
  );
}
