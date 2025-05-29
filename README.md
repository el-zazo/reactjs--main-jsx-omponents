# React Components Library

A collection of modern, reusable React components with Redux integration for building professional web applications.

## Components

### MessageNav Component

A modern, animated notification system for React applications with Redux integration. MessageNav provides a sleek way to display error, warning, and info messages to users with automatic timeout and manual dismissal options.

### DarkBG Component

A simple, reusable dark background overlay component with Redux integration. DarkBG provides an elegant way to create modal-like experiences or highlight specific UI elements by dimming the rest of the page.

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

## Installation

```bash
npm install @elzazo/main-jsx-omponents
```

## Quick Start

### 1. Add the reducers to your Redux store

```jsx
import { configureStore } from "@reduxjs/toolkit";
import { messageNavReducer, darkBgReducer } from "@elzazo/main-jsx-omponents";

export const store = configureStore({
  reducer: {
    message_nav: messageNavReducer,
    dark_bg: darkBgReducer,
    // your other reducers...
  },
});
```

### 2. Add the components to your app

```jsx
import { MessageNav, DarkBG } from "@elzazo/main-jsx-omponents";

function App() {
  return (
    <div className="app">
      <MessageNav />
      <DarkBG />
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
import { display_dark_bg, hide_dark_bg } from "@elzazo/main-jsx-omponents";

function YourComponent() {
  const dispatch = useDispatch();

  const showDarkBG = () => {
    dispatch(display_dark_bg());
  };

  const hideDarkBG = () => {
    dispatch(hide_dark_bg());
  };

  // Auto-hide example
  const toggleDarkBG = () => {
    dispatch(display_dark_bg());
    setTimeout(() => dispatch(hide_dark_bg()), 3000); // Auto-hide after 3 seconds
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

##### display_dark_bg

Shows the dark background overlay.

```jsx
import { display_dark_bg } from "@elzazo/main-jsx-omponents";

dispatch(display_dark_bg());
```

##### hide_dark_bg

Hides the dark background overlay.

```jsx
import { hide_dark_bg } from "@elzazo/main-jsx-omponents";

dispatch(hide_dark_bg());
```

## Customization

### MessageNav CSS Variables

The MessageNav component uses CSS variables for styling, which you can override in your own CSS:

```css
:root {
  --message-bg: #1c1b1b; /* Message background color */
  --message-border: #ffffff30; /* Message border color */
  --message-text: #ffffff80; /* Message text color */
  --message-close-bg: #ffffff20; /* Close button background */
  --message-close-hover-bg: #ffffff30; /* Close button hover background */
  --message-close-color: #ffffff30; /* Close button color */
  --message-close-hover-color: #ffffff80; /* Close button hover color */
  --info-color: #0e5fba; /* Info icon color */
  --warning-color: #cc9a10; /* Warning icon color */
  --error-color: #a52a2a; /* Error icon color */
  --padding-block: 10px; /* Vertical padding */
}
```

### DarkBG CSS Customization

The DarkBG component can be customized by overriding its CSS:

```css
#dark-bg {
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
  z-index: 10; /* Adjust z-index based on your app's layers */
}
```

### Light/Dark Mode Support

The component includes built-in support for light and dark modes:

```css
:root.light {
  --message-bg: #f5f5f5;
  --message-border: #00000030;
  --message-text: #00000080;
  /* ... other light mode variables */
}

:root.dark {
  --message-bg: #1c1b1b;
  --message-border: #ffffff30;
  --message-text: #ffffff80;
  /* ... other dark mode variables */
}
```

## License

ISC
