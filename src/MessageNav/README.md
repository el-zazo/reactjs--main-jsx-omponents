# MessageNav Component

A modern, animated notification system for React applications with Redux integration. MessageNav provides a sleek way to display error, warning, and info messages to users with automatic timeout and manual dismissal options.

## Features

- 🎭 **Animated Transitions** - Smooth entry and exit animations using Framer Motion
- 🎨 **Styled Message Types** - Distinct styling for error, warning, and info messages
- ⏱️ **Auto-Dismissal** - Messages automatically disappear after 10 seconds
- 🔄 **Redux Integration** - Easy state management with Redux Toolkit
- 🎯 **Customizable** - Easily adaptable to your application's design system
- 🌓 **Light/Dark Mode Support** - Built-in theming capabilities

## Usage

```jsx
import { MessageNav } from "@elzazo/main-jsx-omponents";

<MessageNav />;
```

## Redux Actions

### addMessage

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

### removeMessage

Removes a specific message by ID. Usually, you don't need to call this directly as messages auto-dismiss after 10 seconds or when the close button is clicked.

```jsx
import { removeMessage } from "@elzazo/main-jsx-omponents";

dispatch(removeMessage(messageId));
```

## Example

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
