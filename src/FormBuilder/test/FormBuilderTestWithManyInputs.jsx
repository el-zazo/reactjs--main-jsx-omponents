import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormBuilderTest.css";
// Actions
import { addMessage } from "../../MessageNav/redux/Slice";
// Components
import FormBuilder from "../FormBuilder";

/**
 * FormBuilderTestWithManyInputs Component
 * Test page for demonstrating the FormBuilder component with ManyInputs field type
 */
const FormBuilderTestWithManyInputs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  // Form submission handler
  const handleSubmit = (data) => {
    setFormData(data);
    dispatch(
      addMessage({
        type: "info",
        text: "Form with many inputs submitted successfully!",
      })
    );
  };

  // Form field configurations
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
      defaultValue: "zazo",
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
      defaultValue: "zazo@test.com",
    },
    {
      name: "phoneNumbers",
      type: "many-inputs",
      label: "Phone Numbers (min: 2, max: 4)",
      placeholder: "Enter a phone number",
      validation: {
        required: "Phone number is required",
        pattern: {
          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
          message: "Please enter a valid phone number",
        },
        minLength: {
          value: 7,
          message: "Phone number must be at least 7 digits",
        },
      },
      defaultValue: ["+1123-456"], // Will be padded to reach minInputs
      minInputs: 2, // Minimum of 2 phone number inputs
      maxInputs: 4, // Maximum of 4 phone number inputs
    },
    {
      name: "addresses",
      type: "many-inputs",
      label: "Addresses (min: 1, max: 3)",
      placeholder: "Enter an address",
      validation: {
        minLength: {
          value: 5,
          message: "Address must be at least 5 characters",
        },
        maxLength: {
          value: 100,
          message: "Address cannot exceed 100 characters",
        },
      },
      // No defaultValue, but will initialize with minInputs (1 in this case)
      minInputs: 1,
      maxInputs: 3,
    },
    {
      name: "emails",
      type: "many-inputs",
      label: "Additional Emails (min: 3, no max)",
      placeholder: "Enter an email address",
      validation: {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      },
      minInputs: 3, // Minimum of 3 email inputs
      // No maxInputs means unlimited
    },
    {
      name: "message",
      type: "textarea",
      label: "Additional Information",
      placeholder: "Enter any additional information",
      rows: 4,
      validation: {},
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
    <div>
      <FormBuilder fields={fields} onSubmit={handleSubmit} title="ManyInputs Test Page" />

      {formData && (
        <div className="form-data-display">
          <h2>Submitted Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormBuilderTestWithManyInputs;
