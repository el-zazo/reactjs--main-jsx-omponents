import { useDispatch } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import "./BtnClose.css";

// Actions
import { removeMessage } from "../../redux/Slice";

export default function BtnClose({ message_id }) {
  const dsp = useDispatch();

  // Events
  const HDeleteMessage = () => dsp(removeMessage(message_id));

  return <FaXmark className="btn-close" onClick={HDeleteMessage} />;
}
