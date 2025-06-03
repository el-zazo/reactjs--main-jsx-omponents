# FormBuilder Component

A powerful, dynamic form generation component that creates complex forms from simple configuration objects. Supports various input types with built-in validation, custom styling, and flexible layout options.

## Features

- 🧩 **Dynamic Form Generation** - Create complex forms from simple configuration objects
- ✅ **Built-in Validation** - Integrated with React Hook Form for robust validation
- 🎨 **Multiple Input Types** - Support for text, email, password, textarea, checkbox fields
- 🎯 **Customizable** - Configurable labels, placeholders, and validation rules
- 🌓 **Light/Dark Mode Support** - Built-in theming with CSS variables

## Usage

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

## Props

| Prop                | Type     | Default  | Description                                             |
| ------------------- | -------- | -------- | ------------------------------------------------------- |
| `fields`            | array    | Required | Array of field configuration objects                    |
| `onSubmit`          | function | Required | Function called when form is submitted                  |
| `title`             | string   | ""       | Title displayed at the top of the form                  |
| `additionalContent` | object   | {}       | Additional content to render before/after submit button |

## Field Configuration

The FormBuilder component accepts an array of field configuration objects. Each field object can have the following properties:

### Common Properties

| Property       | Type   | Description                                     |
| -------------- | ------ | ----------------------------------------------- |
| `name`         | string | Field name (required)                           |
| `type`         | string | Field type (e.g., text, email, password)        |
| `label`        | string | Field label                                     |
| `placeholder`  | string | Placeholder text                                |
| `validation`   | object | Validation rules (using React Hook Form syntax) |
| `defaultValue` | any    | Default value for the field                     |

### Supported Field Types

- `text` - Standard text input
- `email` - Email input with pattern validation
- `password` - Password input with masking
- `number` - Numeric input with min/max constraints
- `date` - Date picker
- `time` - Time picker
- `datetime-local` - Date and time picker
- `textarea` - Multi-line text input
- `select` - Dropdown selection (requires `options` array)
- `checkbox` - Boolean checkbox
- `many-inputs` - Dynamic array of inputs

## Example

```jsx
import { useState } from "react";
import { FormBuilder } from "@elzazo/main-jsx-omponents";

function ContactForm() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
    console.log("Form submitted:", data);
    // Process form data here
  };

  const fields = [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      validation: {
        required: "Full name is required",
        minLength: {
          value: 3,
          message: "Name must be at least 3 characters",
        },
      },
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your email address",
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
      type: "textarea",
      label: "Message",
      placeholder: "Enter your message",
      rows: 4,
      validation: {
        required: "Message is required",
        maxLength: {
          value: 500,
          message: "Message cannot exceed 500 characters",
        },
      },
    },
    {
      name: "termsAccepted",
      type: "checkbox",
      label: "I accept the terms and conditions",
      validation: {
        required: "You must accept the terms and conditions",
      },
    },
  ];

  return (
    <div>
      <FormBuilder fields={fields} onSubmit={handleSubmit} title="Contact Us" />

      {formData && (
        <div className="form-data-display">
          <h2>Submitted Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```
