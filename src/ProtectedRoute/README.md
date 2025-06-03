# ProtectedRoute Component

A security-focused component with Redux integration that restricts access to sensitive routes based on authentication state. Automatically redirects unauthenticated users to a login page while preserving their intended destination.

## Features

- 🔒 **Authentication Check** - Prevents unauthorized access to protected content
- 🔄 **Redux Integration** - Easy state management with Redux Toolkit
- 🧭 **Location Preservation** - Saves the requested URL for post-login redirection
- 🎯 **Customizable Redirect** - Configurable redirect path for unauthenticated users
- 📝 **Debugging Support** - Optional console logging for access attempts

## Usage

```jsx
import { ProtectedRoute } from "@elzazo/main-jsx-omponents";

<ProtectedRoute redirectPath="/login">
  <SecureContent />
</ProtectedRoute>;
```

## Props

| Prop           | Type   | Default  | Description                                            |
| -------------- | ------ | -------- | ------------------------------------------------------ |
| `children`     | node   | Required | The content to render when user is authenticated       |
| `redirectPath` | string | "/login" | The path to redirect to when user is not authenticated |

## Redux Actions

### setIsAuthenticatedInProtectedRoute

Sets the authentication state for protected routes.

```jsx
import { setIsAuthenticatedInProtectedRoute } from "@elzazo/main-jsx-omponents";

// After successful login
dispatch(setIsAuthenticatedInProtectedRoute(true));

// After logout
dispatch(setIsAuthenticatedInProtectedRoute(false));
```

## Example

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute, setIsAuthenticatedInProtectedRoute } from "@elzazo/main-jsx-omponents";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.protected_route?.isAuthenticated);

  const handleLogin = () => {
    // Your authentication logic here
    dispatch(setIsAuthenticatedInProtectedRoute(true));
  };

  const handleLogout = () => {
    dispatch(setIsAuthenticatedInProtectedRoute(false));
  };

  return (
    <Router>
      <div>
        {isAuthenticated ? <button onClick={handleLogout}>Log Out</button> : <button onClick={handleLogin}>Log In</button>}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectPath="/custom-login">
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
```
