import { FaGear } from "react-icons/fa6";
import "./LoodingPage.css";

// Component that displays a loading spinner
export default function LoodingPage() {
  return (
    <div id="looding-page">
      <FaGear className="fa-spin" />
    </div>
  );
}
