# React Components Library

A collection of modern, reusable React components with Redux integration for building professional web applications.

## Components

### MessageNav Component

A modern, animated notification system for React applications with Redux integration. MessageNav provides a sleek way to display error, warning, and info messages to users with automatic timeout and manual dismissal options.

### DarkBG Component

A simple, reusable dark background overlay component with Redux integration. DarkBG provides an elegant way to create modal-like experiences or highlight specific UI elements by dimming the rest of the page.

### TwoStepButton Component

A professional React component that provides a two-step confirmation button pattern. When clicked, it changes to a confirmation button that reverts to its original state after a specified timeout if not confirmed.

### LoodingPage Component

A lightweight, customizable loading spinner component that creates a full-screen overlay with an animated gear icon. Perfect for indicating background processes or page transitions in your application.

### NotFoundPage Component

A professionally styled 404 error page component that provides users with clear navigation options when they encounter missing content. Features a responsive design with customizable styling options.

### ProtectedRoute Component

A security-focused component with Redux integration that restricts access to sensitive routes based on authentication state. Automatically redirects unauthenticated users to a login page while preserving their intended destination.

### FormBuilder Component

A powerful, dynamic form generation component that creates complex forms from simple configuration objects. Supports various input types with built-in validation, custom styling, and flexible layout options.

## Features

### MessageNav Features

- 🎭 **Animated Transitions** - Smooth entry and exit animations using Framer Motion
- 🎨 **Styled Message Types** - Distinct styling for error, warning, and info messages
- ⏱️ **Auto-Dismissal** - Messages automatically disappear after 10 seconds
- 🔄 **Redux Integration** - Easy state management with Redux Toolkit
- 🎯 **Customizable** - Easily adaptable to your application's design system
- 🌓 **Light/Dark Mode Support** - Built-in theming capabilities

### DarkBG Features

- 🖤 **Semi-Transparent Overlay** - Creates a dark, semi-transparent layer over your application
- 🔄 **Redux Integration** - Easy state management with Redux Toolkit
- 🎯 **Simple API** - Show and hide with simple Redux actions
- 📱 **Responsive** - Covers the entire viewport regardless of screen size
- 🔢 **Z-Index Control** - Properly layered to work with modals and popups

### TwoStepButton Features

- 🔄 **Two-Step Confirmation** - Prevents accidental clicks on important actions
- ⏱️ **Auto-Reset** - Returns to initial state after a configurable timeout
- 🎨 **Multiple Variants** - Includes default, danger, and success styling options
- 🎯 **Customizable** - Configurable text, timeout, and styling
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

### LoodingPage Features

- 🔄 **Animated Spinner** - Smooth rotating gear animation for visual feedback
- 🖤 **Full-Screen Overlay** - Creates a semi-transparent layer over your application
- 📱 **Responsive Design** - Properly centered and sized on all screen dimensions
- 🎨 **Customizable** - Configurable colors, size, and animation speed
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

### NotFoundPage Features

- 🚫 **Error Visualization** - Clear visual indication of 404 status with warning icon
- 📝 **Informative Messaging** - Helpful explanation of the error situation
- 🔄 **Navigation Options** - Direct link back to the home page
- 🎨 **Professional Styling** - Modern, attractive design with animations
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

### ProtectedRoute Features

- 🔒 **Authentication Check** - Prevents unauthorized access to protected content
- 🔄 **Redux Integration** - Easy state management with Redux Toolkit
- 🧭 **Location Preservation** - Saves the requested URL for post-login redirection
- 🎯 **Customizable Redirect** - Configurable redirect path for unauthenticated users
- 📝 **Debugging Support** - Optional console logging for access attempts

### FormBuilder Features

- 🧩 **Dynamic Form Generation** - Create complex forms from simple configuration objects
- ✅ **Built-in Validation** - Integrated with React Hook Form for robust validation
- 🎨 **Multiple Input Types** - Support for text, email, password, textarea, checkbox fields
- 🎯 **Customizable** - Configurable labels, placeholders, and validation rules
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

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

### 3. Dispatch actions from anywhere in your app

#### MessageNav Example

```jsx
import { useDispatch } from "react-redux";
import { addMessage } from "@elzazo/main-jsx-omponents";

function YourComponent() {
  const dispatch = useDispatch();

  const showSuccessMessage = () => {
    dispatch(
      addMessage({
        type: "info",
        text: "Operation completed successfully!",
      })
    );
  };

  const showErrorMessage = () => {
    dispatch(
      addMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      })
    );
  };

  const showWarningMessage = () => {
    dispatch(
      addMessage({
        type: "warning",
        text: "This action cannot be undone.",
      })
    );
  };

  return (
    <div>
      <button onClick={showSuccessMessage}>Show Success</button>
      <button onClick={showErrorMessage}>Show Error</button>
      <button onClick={showWarningMessage}>Show Warning</button>
    </div>
  );
}
```

#### DarkBG Example

```jsx
import { useDispatch } from "react-redux";
import { displayDarkBg, hideDarkBg } from "@elzazo/main-jsx-omponents";

function YourComponent() {
  const dispatch = useDispatch();

  const showDarkBG = () => {
    dispatch(displayDarkBg());
  };

  const hideDarkBG = () => {
    dispatch(hideDarkBg());
  };

  // Auto-hide example
  const toggleDarkBG = () => {
    dispatch(displayDarkBg());
    setTimeout(() => dispatch(hideDarkBg()), 3000); // Auto-hide after 3 seconds
  };

  return (
    <div>
      <button onClick={showDarkBG}>Show Dark Background</button>
      <button onClick={hideDarkBG}>Hide Dark Background</button>
      <button onClick={toggleDarkBG}>Toggle Dark Background (Auto-hide)</button>
    </div>
  );
}
```

## API Reference

### MessageNav Component

The main component that renders the notification container.

```jsx
import { MessageNav } from "@elzazo/main-jsx-omponents";

<MessageNav />;
```

### DarkBG Component

The component that renders the dark background overlay.

```jsx
import { DarkBG } from "@elzazo/main-jsx-omponents";

<DarkBG />;
```

### TwoStepButton Component

A two-step confirmation button to prevent accidental actions.

```jsx
import { TwoStepButton } from "@elzazo/main-jsx-omponents";

<TwoStepButton buttonText="Delete Item" confirmText="Confirm Delete" onConfirm={handleDelete} timeout={3000} variant="danger" />;
```

### LoodingPage Component

A loading spinner overlay for indicating background processes.

```jsx
import { LoodingPage } from "@elzazo/main-jsx-omponents";

// Use conditionally based on loading state
{
  isLoading && <LoodingPage />;
}
```

### NotFoundPage Component

A 404 error page for handling non-existent routes.

```jsx
import { NotFoundPage } from "@elzazo/main-jsx-omponents";

// Typically used in route definitions
<Route path="*" element={<NotFoundPage />} />;
```

### ProtectedRoute Component

A wrapper component that protects routes requiring authentication.

```jsx
import { ProtectedRoute } from "@elzazo/main-jsx-omponents";

<ProtectedRoute redirectPath="/login">
  <SecureContent />
</ProtectedRoute>;
```

### FormBuilder Component

A dynamic form generator component.

```jsx
import { FormBuilder } from "@elzazo/main-jsx-omponents";

const formFields = [
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Type your message here",
    rows: 4,
    validation: {
      required: "Message is required",
      minLength: {
        value: 10,
        message: "Message must be at least 10 characters",
      },
    },
  },
];

<FormBuilder fields={formFields} onSubmit={handleSubmit} title="Contact Form" />;
```

### Redux Actions

#### MessageNav Actions

##### addMessage

Adds a new message to the notification stack.

```jsx
import { addMessage } from "@elzazo/main-jsx-omponents";

dispatch(
  addMessage({
    type: "error" | "warning" | "info", // Required: Message type
    text: "Your message here", // Required: Message content
  })
);
```

##### removeMessage

Removes a specific message by ID. Usually, you don't need to call this directly as messages auto-dismiss after 10 seconds or when the close button is clicked.

```jsx
import { removeMessage } from "@elzazo/main-jsx-omponents";

dispatch(removeMessage(messageId));
```

#### DarkBG Actions

##### displayDarkBg

Shows the dark background overlay.

```jsx
import { displayDarkBg } from "@elzazo/main-jsx-omponents";

dispatch(displayDarkBg());
```

##### hideDarkBg

Hides the dark background overlay.

```jsx
import { hideDarkBg } from "@elzazo/main-jsx-omponents";

dispatch(hideDarkBg());
```

#### ProtectedRoute Actions

##### setIsAuthenticatedInProtectedRoute

Sets the authentication state for protected routes.

```jsx
import { setIsAuthenticatedInProtectedRoute } from "@elzazo/main-jsx-omponents";

// After successful login
dispatch(setIsAuthenticatedInProtectedRoute(true));

// After logout
dispatch(setIsAuthenticatedInProtectedRoute(false));
```

#### TwoStepButton Props

| Prop          | Type     | Default   | Description                                            |
| ------------- | -------- | --------- | ------------------------------------------------------ |
| `buttonText`  | string   | "Action"  | Text displayed on the initial button                   |
| `confirmText` | string   | "Confirm" | Text displayed on the confirmation button              |
| `className`   | string   | ""        | Additional CSS class names                             |
| `onConfirm`   | function | () => {}  | Function called when confirmation button is clicked    |
| `timeout`     | number   | 3000      | Time in milliseconds before reverting to initial state |
| `variant`     | string   | ""        | Button style variant (e.g., 'danger', 'success')       |
| `disabled`    | boolean  | false     | Whether the button is disabled                         |

#### ProtectedRoute Props

| Prop           | Type   | Default  | Description                                            |
| -------------- | ------ | -------- | ------------------------------------------------------ |
| `children`     | node   | Required | The content to render when user is authenticated       |
| `redirectPath` | string | "/login" | The path to redirect to when user is not authenticated |

#### FormBuilder Props

| Prop                | Type     | Default  | Description                                             |
| ------------------- | -------- | -------- | ------------------------------------------------------- |
| `fields`            | array    | Required | Array of field configuration objects                    |
| `onSubmit`          | function | Required | Function called when form is submitted                  |
| `title`             | string   | ""       | Title displayed at the top of the form                  |
| `additionalContent` | object   | {}       | Additional content to render before/after submit button |

## License

ISC
