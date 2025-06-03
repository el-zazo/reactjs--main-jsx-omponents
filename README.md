# React Components Library

A collection of modern, reusable React components with Redux integration for building professional web applications.

## Components

This library includes the following components, each with its own detailed documentation:

- **MessageNav**: A modern, animated notification system with Redux integration
- **DarkBG**: A simple, reusable dark background overlay component
- **TwoStepButton**: A two-step confirmation button pattern
- **LoodingPage**: A customizable loading spinner component
- **NotFoundPage**: A professionally styled 404 error page component
- **ProtectedRoute**: A security-focused component with Redux integration
- **FormBuilder**: A dynamic form generation component

For detailed documentation on each component, please refer to the README.md file in each component's directory.

## Installation

```bash
npm install @elzazo/main-jsx-omponents
```

## Quick Start

### 1. Add the reducers to your Redux store

```jsx
import { configureStore } from "@reduxjs/toolkit";
import { messageNavReducer, darkBgReducer, protectedRouteReducer } from "@elzazo/main-jsx-omponents";

export const store = configureStore({
  reducer: {
    message_nav: messageNavReducer,
    dark_bg: darkBgReducer,
    protected_route: protectedRouteReducer,
    // your other reducers...
  },
});
```

### 2. Add the components to your app

```jsx
import { MessageNav, DarkBG, TwoStepButton, LoodingPage, NotFoundPage, ProtectedRoute, FormBuilder } from "@elzazo/main-jsx-omponents";

function App() {
  return (
    <div className="app">
      <MessageNav />
      <DarkBG />
      <TwoStepButton buttonText="Delete Item" onConfirm={() => console.log("Confirmed!")} />
      {/* Loading state example */}
      {isLoading && <LoodingPage />}

      {/* Protected routes example */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <SecurePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Your app content */}
    </div>
  );
}
```

## Component Documentation

Each component has its own README.md file with detailed documentation, including:

- Features
- Usage examples
- Props and configuration options
- Redux actions (where applicable)

Please refer to the individual component directories for more information.

## License

ISC
