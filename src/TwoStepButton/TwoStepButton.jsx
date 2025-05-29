import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./TwoStepButton.css";

/**
 * TwoStepButton - A two-step confirmation button component
 *
 * This component displays an initial button that, when clicked, changes to a confirmation
 * button. If the confirmation button is not clicked within the specified timeout period,
 * it reverts to the initial button state. This pattern is useful for destructive or
 * important actions that require user confirmation.
 *
 * @component
 * @example
 * ```jsx
 * <TwoStepButton
 *   buttonText="Delete Item"
 *   confirmText="Confirm Delete"
 *   onConfirm={() => handleDelete(item.id)}
 *   timeout={5000}
 *   variant="danger"
 * />
 * ```
 */
const TwoStepButton = ({ buttonText = "Action", confirmText = "Confirm", className = "", onConfirm = () => {}, timeout = 3000, variant = "", disabled = false }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const timeoutRef = useRef(null);

  // Clear timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleShowConfirm = () => {
    setShowConfirm(true);
    timeoutRef.current = setTimeout(() => setShowConfirm(false), timeout);
  };

  const handleConfirm = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowConfirm(false);

    try {
      onConfirm();
    } catch (error) {
      console.error("Error in onConfirm callback:", error);
    }
  };

  const buttonClasses = `two-step-button ${className} ${variant}`.trim();

  return !showConfirm ? (
    <button className={buttonClasses} onClick={handleShowConfirm} disabled={disabled} type="button" aria-label={buttonText}>
      {buttonText}
    </button>
  ) : (
    <button className={`${buttonClasses} second-btn`} onClick={handleConfirm} disabled={disabled} type="button" aria-label={confirmText}>
      {confirmText}
    </button>
  );
};

TwoStepButton.propTypes = {
  /** Text to display on the initial button */
  buttonText: PropTypes.string,
  /** Text to display on the confirmation button */
  confirmText: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string,
  /** Function to call when the confirmation button is clicked */
  onConfirm: PropTypes.func,
  /** Time in milliseconds before reverting to initial state */
  timeout: PropTypes.number,
  /** Button style variant (e.g., 'danger', 'success') */
  variant: PropTypes.string,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
};

export default TwoStepButton;
