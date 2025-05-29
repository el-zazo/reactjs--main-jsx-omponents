import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * ProtectedRoute - A component that protects routes requiring authentication
 *
 * This component checks if the user is authenticated before rendering its children.
 * If the user is not authenticated, it redirects to the login page while preserving
 * the original requested URL in the location state for redirect after login.
 *
 * @component
 * @example
 * ```jsx
 * <ProtectedRoute>
 *   <SensitiveComponent />
 * </ProtectedRoute>
 * ```
 */
export default function ProtectedRoute({ children, redirectPath = "/login" }) {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.protected_route?.isAuthenticated);

  // You can add additional checks here, like token expiration validation
  useEffect(() => {
    // Optional: Log access attempts or perform additional validation
    if (!isAuthenticated) {
      console.log("Access to protected route denied");
    }
  }, [isAuthenticated]);

  // If not authenticated, redirect to login with the current location for later redirect
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // If authenticated, render the protected content
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};
