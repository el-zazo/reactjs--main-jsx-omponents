import { FaExclamationTriangle } from "react-icons/fa";
import "./NotFoundPage.css";

// Component that displays a 404 Not Found page
export default function NotFoundPage() {
  return (
    <div id="not-found-page">
      <div className="not-found-container">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="back-home-btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}
