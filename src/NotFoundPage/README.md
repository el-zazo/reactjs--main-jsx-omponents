# NotFoundPage Component

A professionally styled 404 error page component that provides users with clear navigation options when they encounter missing content. Features a responsive design with customizable styling options.

## Features

- 🚫 **Error Visualization** - Clear visual indication of 404 status with warning icon
- 📝 **Informative Messaging** - Helpful explanation of the error situation
- 🔄 **Navigation Options** - Direct link back to the home page
- 🎨 **Professional Styling** - Modern, attractive design with animations
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

## Usage

```jsx
import { NotFoundPage } from "@elzazo/main-jsx-omponents";

// Typically used in route definitions
<Route path="*" element={<NotFoundPage />} />;
```

## Example

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "@elzazo/main-jsx-omponents";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* NotFoundPage will catch all undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
```
