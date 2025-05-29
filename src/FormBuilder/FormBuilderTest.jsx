import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormBuilder from "./FormBuilder";
import { addMessage } from "../MessageNav/redux/Slice";
import "./FormBuilderTest.css";

/**
 * FormBuilderTest Component
 * Test page for demonstrating the FormBuilder component with various field types
 */
const FormBuilderTest = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  // Form submission handler
  const handleSubmit = (data) => {
    setFormData(data);
    dispatch(
      addMessage({
        type: "info",
        text: "Form submitted successfully!",
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
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      validation: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      },
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      validation: {
        required: "Please confirm your password",
        validate: (value, { getValues }) => {
          return value === getValues().password || "Passwords do not match";
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
      className: "terms-checkbox",
      validation: {
        required: "You must accept the terms and conditions",
      },
    },
  ];

  return (
    <div>
      <FormBuilder fields={fields} onSubmit={handleSubmit} title="FormBuilder Test Page" />

      {formData && (
        <div className="form-data-display">
          <h2>Submitted Form Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormBuilderTest;
