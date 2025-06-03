# TwoStepButton Component

A professional React component that provides a two-step confirmation button pattern. When clicked, it changes to a confirmation button that reverts to its original state after a specified timeout if not confirmed.

## Features

- 🔄 **Two-Step Confirmation** - Prevents accidental clicks on important actions
- ⏱️ **Auto-Reset** - Returns to initial state after a configurable timeout
- 🎨 **Multiple Variants** - Includes default, danger, and success styling options
- 🎯 **Customizable** - Configurable text, timeout, and styling
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

## Usage

```jsx
import { TwoStepButton } from "@elzazo/main-jsx-omponents";

<TwoStepButton buttonText="Delete Item" confirmText="Confirm Delete" onConfirm={handleDelete} timeout={3000} variant="danger" />;
```

## Props

| Prop          | Type     | Default   | Description                                            |
| ------------- | -------- | --------- | ------------------------------------------------------ |
| `buttonText`  | string   | "Action"  | Text displayed on the initial button                   |
| `confirmText` | string   | "Confirm" | Text displayed on the confirmation button              |
| `className`   | string   | ""        | Additional CSS class names                             |
| `onConfirm`   | function | () => {}  | Function called when confirmation button is clicked    |
| `timeout`     | number   | 3000      | Time in milliseconds before reverting to initial state |
| `variant`     | string   | ""        | Button style variant (e.g., 'danger', 'success')       |
| `disabled`    | boolean  | false     | Whether the button is disabled                         |

## Example

```jsx
import { TwoStepButton } from "@elzazo/main-jsx-omponents";

function YourComponent() {
  const handleConfirmAction = () => {
    console.log("Action confirmed!");
    // Perform your action here
  };

  return (
    <div>
      <TwoStepButton buttonText="Delete Item" confirmText="Confirm Delete" onConfirm={handleConfirmAction} timeout={5000} variant="danger" />

      <TwoStepButton buttonText="Save Changes" confirmText="Confirm Save" onConfirm={handleConfirmAction} variant="success" />
    </div>
  );
}
```
