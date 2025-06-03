# LoodingPage Component

A lightweight, customizable loading spinner component that creates a full-screen overlay with an animated gear icon. Perfect for indicating background processes or page transitions in your application.

## Features

- 🔄 **Animated Spinner** - Smooth rotating gear animation for visual feedback
- 🖤 **Full-Screen Overlay** - Creates a semi-transparent layer over your application
- 📱 **Responsive Design** - Properly centered and sized on all screen dimensions
- 🎨 **Customizable** - Configurable colors, size, and animation speed
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

## Usage

```jsx
import { LoodingPage } from "@elzazo/main-jsx-omponents";

// Use conditionally based on loading state
{
  isLoading && <LoodingPage />;
}
```

## Example

```jsx
import { useState, useEffect } from "react";
import { LoodingPage } from "@elzazo/main-jsx-omponents";

function YourComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Process data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{isLoading ? <LoodingPage /> : <div>Your content here</div>}</div>;
}
```
