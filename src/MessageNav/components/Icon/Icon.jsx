import { FaCircleExclamation } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import "./Icon.css";

// Component that displays different icons based on message type
export default function Icon({ type }) {
  return type === "error" ? (
    <FaCircleExclamation className="icon-for-type error" />
  ) : type === "warning" ? (
    <FaTriangleExclamation className="icon-for-type warning" />
  ) : type === "info" ? (
    <FaCircleInfo className="icon-for-type info" />
  ) : (
    ""
  );
}
