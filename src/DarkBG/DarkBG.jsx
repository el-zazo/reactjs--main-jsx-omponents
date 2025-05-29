import { useSelector } from "react-redux";
import "./DarkBG.css";

export default function DarkBG() {
  const displayDarkBg = useSelector((st) => st.dark_bg.display);

  return displayDarkBg && <div id="dark-bg"></div>;
}
