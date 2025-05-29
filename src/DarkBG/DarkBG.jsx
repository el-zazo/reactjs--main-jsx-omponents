import { useSelector } from "react-redux";

export default function DarkBG() {
  const display_dark_bg = useSelector((st) => st.dark_bg.display);

  return display_dark_bg && <div id="dark-bg"></div>;
}
