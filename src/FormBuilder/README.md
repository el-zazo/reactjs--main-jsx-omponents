# FormBuilder Component

A dynamic form generator that creates forms based on configuration objects. The FormBuilder component leverages React Hook Form for validation and state management, providing a flexible and powerful way to create forms with minimal code.

## Features

- Dynamic form generation from configuration objects
- Support for multiple field types
- Built-in validation using React Hook Form
- Submit and cancel button support with custom handlers
- Customizable styling with CSS variables
- Dark mode support
- Responsive design
- Accessible form elements

## Installation

```bash
npm install react-hook-form
npm install react-icons
```

## Basic Usage

```jsx
import React, { useState } from "react";
import FormBuilder from "./FormBuilder";

const MyForm = () => {
  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const fields = [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      validation: {
        required: "Full name is required",
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
  ];

  return <FormBuilder fields={fields} onSubmit={handleSubmit} title="Contact Form" submitButtonText="Send" />;
};

export default MyForm;
```

## Props

| Prop                | Type   | Description                                             | Required |
| ------------------- | ------ | ------------------------------------------------------- | -------- |
| `fields`            | Array  | Array of field configuration objects                    | Yes      |
| `title`             | String | Form title                                              | No       |
| `additionalContent` | Object | Additional content to render before/after submit button | No       |
| `submit`            | Object | Submit button configuration (see Submit Object)         | No       |
| `cancel`            | Object | Cancel button configuration (see Cancel Object)         | No       |

### additionalContent Object

| Property       | Type            | Description                          |
| -------------- | --------------- | ------------------------------------ |
| `beforeSubmit` | React.ReactNode | Content to render before the buttons |
| `afterSubmit`  | React.ReactNode | Content to render after the buttons  |

### Submit Object

| Property      | Type     | Description                | Default    |
| ------------- | -------- | -------------------------- | ---------- |
| `handleEvent` | Function | Submit event handler       | `null`     |
| `text`        | String   | Text for the submit button | `"Submit"` |

### Cancel Object

| Property      | Type     | Description                | Default    |
| ------------- | -------- | -------------------------- | ---------- |
| `handleEvent` | Function | Cancel event handler       | `null`     |
| `text`        | String   | Text for the cancel button | `"Cancel"` |

**Note:** The cancel button will only be displayed if `cancel.handleEvent` is provided.

Example usage:

```jsx
<FormBuilder
  fields={fields}
  title="Contact Form"
  submit={{
    handleEvent: (data) => {
      console.log("Form submitted:", data);
      // Handle form submission
    },
    text: "Send Message",
  }}
  cancel={{
    handleEvent: () => {
      console.log("Form cancelled");
      // Handle form cancellation
    },
    text: "Go Back",
  }}
  additionalContent={{
    beforeSubmit: <div className="disclaimer">By submitting this form, you agree to our terms.</div>,
    afterSubmit: <div className="help-text">Need help? Contact support.</div>,
  }}
/>
```

**Legacy usage (still supported for backward compatibility):**

```jsx
<FormBuilder
  fields={fields}
  onSubmit={handleSubmit}
  title="Contact Form"
  submitButtonText="Send Message"
  additionalContent={{
    beforeSubmit: <div className="disclaimer">By submitting this form, you agree to our terms.</div>,
    afterSubmit: <div className="help-text">Need help? Contact support.</div>,
  }}
/>
```

## Field Configuration

### Common Properties

These properties are common to all field types:

| Property       | Type   | Description                               | Required |
| -------------- | ------ | ----------------------------------------- | -------- |
| `name`         | String | Field name (used as ID and for form data) | Yes      |
| `type`         | String | Field type (see Supported Types)          | Yes      |
| `label`        | String | Field label                               | Yes      |
| `placeholder`  | String | Placeholder text                          | No       |
| `defaultValue` | Any    | Default value for the field               | No       |
| `validation`   | Object | Validation rules (see Validation Rules)   | No       |

### Supported Types

- `text` - Text input
- `email` - Email input
- `password` - Password input
- `number` - Number input
- `date` - Date picker
- `time` - Time picker
- `datetime-local` - Date and time picker
- `textarea` - Multiline text input
- `select` - Dropdown select
- `checkbox` - Checkbox input
- `many-inputs` - Dynamic list of inputs

### Specific Properties for `text`, `email`, `password`, `number`

These field types use the common properties plus:

| Property | Type   | Description                        | Required |
| -------- | ------ | ---------------------------------- | -------- |
| `min`    | Number | Minimum value (for `number` type)  | No       |
| `max`    | Number | Maximum value (for `number` type)  | No       |
| `step`   | Number | Step increment (for `number` type) | No       |

Example:

```jsx
{
  name: "age",
  type: "number",
  label: "Age",
  placeholder: "Enter your age",
  min: 18,
  max: 120,
  step: 1,
  validation: {
    required: "Age is required"
  }
}
```

### Specific Properties for `date`, `time`, `datetime-local`

| Property | Type   | Description                            | Required |
| -------- | ------ | -------------------------------------- | -------- |
| `min`    | String | Minimum date/time value                | No       |
| `max`    | String | Maximum date/time value                | No       |
| `step`   | Number | Step increment (in seconds for `time`) | No       |

Example:

```jsx
{
  name: "meetingTime",
  type: "time",
  label: "Preferred Meeting Time",
  placeholder: "Select your preferred meeting time",
  min: "09:00",
  max: "18:00",
  step: 900, // 15 minutes in seconds
  validation: {
    required: "Meeting time is required"
  }
}
```

### Specific Properties for `textarea`

| Property | Type   | Description                  | Required |
| -------- | ------ | ---------------------------- | -------- |
| `rows`   | Number | Number of visible text lines | No       |

Example:

```jsx
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
      message: "Message cannot exceed 500 characters"
    }
  }
}
```

### Specific Properties for `select`

| Property   | Type    | Description                                                 | Required |
| ---------- | ------- | ----------------------------------------------------------- | -------- |
| `options`  | Array   | Array of option objects with `value` and `label` properties | Yes      |
| `multiple` | Boolean | Allow multiple selections                                   | No       |

Example:

```jsx
{
  name: "country",
  type: "select",
  label: "Country",
  placeholder: "Select your country",
  options: [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" }
  ],
  validation: {
    required: "Please select a country"
  }
}
```

Multiple select example:

```jsx
{
  name: "skills",
  label: "Select Skills",
  type: "select",
  multiple: true,
  options: [
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "node", label: "Node.js" }
  ],
  validation: {
    required: "Please select at least one skill"
  },
  defaultValue: ["js", "react"]
}
```

### Specific Properties for `checkbox`

| Property         | Type     | Description                                 | Required |
| ---------------- | -------- | ------------------------------------------- | -------- |
| `className`      | String   | Custom CSS class for the checkbox container | No       |
| `defaultChecked` | Boolean  | Default checked state                       | No       |
| `onChange`       | Function | Custom change handler                       | No       |

Example:

```jsx
{
  name: "termsAccepted",
  type: "checkbox",
  label: "I accept the terms and conditions",
  className: "terms-checkbox",
  validation: {
    required: "You must accept the terms and conditions"
  }
}
```

### Specific Properties for `many-inputs`

| Property       | Type   | Description                        | Required |
| -------------- | ------ | ---------------------------------- | -------- |
| `minInputs`    | Number | Minimum number of input fields     | No       |
| `maxInputs`    | Number | Maximum number of input fields     | No       |
| `defaultValue` | Array  | Array of default values for inputs | No       |

Example:

```jsx
{
  name: "phoneNumbers",
  type: "many-inputs",
  label: "Phone Numbers",
  placeholder: "Enter a phone number",
  minInputs: 1,
  maxInputs: 3,
  defaultValue: ["+1123-456-7890"],
  validation: {
    required: "Phone number is required",
    pattern: {
      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
      message: "Please enter a valid phone number"
    }
  }
}
```

## Validation Rules

The FormBuilder uses React Hook Form for validation. Here are the common validation rules you can use:

| Rule        | Type           | Description                     | Example                                                       |
| ----------- | -------------- | ------------------------------- | ------------------------------------------------------------- |
| `required`  | String/Boolean | Field is required               | `required: "This field is required"`                          |
| `min`       | Object         | Minimum value for number inputs | `min: { value: 18, message: "Must be at least 18" }`          |
| `max`       | Object         | Maximum value for number inputs | `max: { value: 100, message: "Cannot exceed 100" }`           |
| `minLength` | Object         | Minimum string length           | `minLength: { value: 3, message: "Min 3 characters" }`        |
| `maxLength` | Object         | Maximum string length           | `maxLength: { value: 20, message: "Max 20 characters" }`      |
| `pattern`   | Object         | Regex pattern to match          | `pattern: { value: /regex/, message: "Invalid format" }`      |
| `validate`  | Function       | Custom validation function      | `validate: (value) => value === "valid" \|\| "Error message"` |

Example with multiple validation rules:

```jsx
{
  name: "password",
  type: "password",
  label: "Password",
  validation: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters"
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: "Password must contain uppercase, lowercase, and number"
    }
  }
}
```

## HTML Structure for Manual Styling

### Main Form Structure

```html
<div class="form-page">
  <h1>Form Title</h1>
  <form class="form-container">
    <!-- Form fields are rendered here -->
    <div class="form-buttons">
      <!-- Cancel button (only shown if cancel.handleEvent is provided) -->
      <button type="button" class="cancel-button">Cancel</button>
      <!-- Submit button -->
      <button type="submit" class="submit-button">Submit</button>
    </div>
  </form>
</div>
```

### Text, Email, Password, Number, Date, Time, Datetime-local Inputs

```html
<div class="form-group">
  <label for="fieldName">Field Label</label>
  <input id="fieldName" type="text|email|password|number|date|time|datetime-local" class="error" <!-- Added when validation fails -- />
  />
  <span class="error-message">Error message</span>
  <!-- Shown when validation fails -->
</div>
```

### Textarea

```html
<div class="form-group">
  <label for="fieldName">Field Label</label>
  <textarea id="fieldName" rows="5" class="error" <!-- Added when validation fails -->  ></textarea>
  <span class="error-message">Error message</span>
  <!-- Shown when validation fails -->
</div>
```

### Select

```html
<div class="form-group">
  <label for="fieldName">Field Label</label>
  <select id="fieldName" class="error" <!-- Added when validation fails -->
    multiple
    <!-- Added for multiple select -->
    >
    <option value="" disabled>Placeholder</option>
    <option value="value1">Label 1</option>
    <option value="value2">Label 2</option>
  </select>
  <span class="error-message">Error message</span>
  <!-- Shown when validation fails -->
</div>
```

### Checkbox

```html
<div class="form-options">
  <div class="custom-class-name">
    <!-- Uses field.className if provided -->
    <input type="checkbox" id="fieldName" class="error" <!-- Added when validation fails -- />
    />
    <label for="fieldName">Field Label</label>
    <span class="error-message">Error message</span>
    <!-- Shown when validation fails -->
  </div>
</div>
```

### Many Inputs

```html
<div class="form-group many-inputs-container">
  <label>Field Label</label>

  <!-- Repeated for each input -->
  <div class="many-inputs-row-container">
    <div class="many-inputs-row error focused">
      <!-- error/focused classes are conditional -->
      <input type="text" />

      <!-- First row has add button -->
      <button type="button" class="btn-add disabled">
        <!-- disabled class is conditional -->
        <FaPlus />
        <!-- Icon component -->
      </button>

      <!-- Other rows have remove button -->
      <button type="button" class="btn-remove disabled">
        <!-- disabled class is conditional -->
        <FaMinus />
        <!-- Icon component -->
      </button>
    </div>

    <span class="error-message">Error message</span>
    <!-- Shown when validation fails -->
  </div>
</div>
```

## Complete Example

```jsx
import React, { useState } from "react";
import FormBuilder from "./FormBuilder";

const CompleteFormExample = () => {
  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    // Navigate away or reset form
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
      name: "country",
      type: "select",
      label: "Country",
      placeholder: "Select your country",
      options: [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
      ],
      validation: {
        required: "Please select a country",
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
      },
    },
    {
      name: "phoneNumbers",
      type: "many-inputs",
      label: "Phone Numbers",
      placeholder: "Enter a phone number",
      minInputs: 1,
      maxInputs: 3,
      validation: {
        pattern: {
          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
          message: "Please enter a valid phone number",
        },
      },
    },
    {
      name: "termsAccepted",
      type: "checkbox",
      label: "I accept the terms and conditions",
      className: "terms-checkbox",
      validation: {
        required: "You must accept the terms and conditions",
      },
    },
  ];

  return (
    <FormBuilder
      fields={fields}
      title="Contact Form"
      submit={{
        handleEvent: handleSubmit,
        text: "Submit Form",
      }}
      cancel={{
        handleEvent: handleCancel,
        text: "Cancel",
      }}
      additionalContent={{
        beforeSubmit: <div className="disclaimer">By submitting this form, you agree to our terms.</div>,
      }}
    />
  );
};

export default CompleteFormExample;
```

## Styling with CSS Variables

The FormBuilder component uses CSS variables for styling, which can be customized to match your application's design system. Here are the main variables you can override:

```css
:root .form-page {
  /* Form Colors */
  --form-bg-color: #ffffff;
  --form-text-color: #1a1a1a;
  --input-border-color: #e0e0e0;
  --input-focus-color: #5e72e4;
  --error-color: #f5365c;
  --success-color: #2dce89;
  --shadow-color: rgba(0, 0, 0, 0.1);

  /* Button Colors */
  --button-bg-color: #5e72e4;
  --button-text-color: #ffffff;
  --button-hover-color: #4a5cd4;
  --button-shadow: 0 4px 6px rgba(94, 114, 228, 0.3);

  /* Cancel Button Colors */
  /* The cancel button uses the error-color by default */

  /* Animation */
  --transition-speed: 0.3s;
}

/* Dark Mode Variables */
:root.dark .form-page {
  --form-bg-color: #1a1a1a;
  --form-text-color: #f8f9fa;
  --input-border-color: #333333;
  --input-focus-color: #4a4a4a;
  /* ... other dark mode variables ... */
}
```

## Advanced Usage

### Custom Validation

You can use the `validate` property to create custom validation rules:

```jsx
{
  name: "confirmPassword",
  type: "password",
  label: "Confirm Password",
  validation: {
    required: "Please confirm your password",
    validate: (value, { getValues }) => {
      return value === getValues().password || "Passwords do not match";
    }
  }
}
```

### Form Submission

The `onSubmit` prop receives the form data when the form is submitted:

```jsx
const handleSubmit = (data) => {
  console.log("Form data:", data);

  // Example: Send data to an API
  fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
```
