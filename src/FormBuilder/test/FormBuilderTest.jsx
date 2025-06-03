import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./FormBuilderTest.css";
// Actions
import { addMessage } from "../../MessageNav/redux/Slice";
// Components
import FormBuilder from "../FormBuilder";

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
      name: "country",
      type: "select",
      label: "Country",
      placeholder: "Select your country",
      options: [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "au", label: "Australia" },
        { value: "jp", label: "Japan" },
      ],
      validation: {
        required: "Please select a country",
      },
      defaultValue: "ca",
    },
    {
      name: "skills",
      label: "Select Skills",
      type: "select",
      multiple: true, // Enable multi-select functionality
      options: [
        { value: "js", label: "JavaScript" },
        { value: "react", label: "React" },
        { value: "node", label: "Node.js" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "python", label: "Python" },
      ],
      validation: {
        required: "Please select at least one skill",
      },
      defaultValue: ["js", "node"],
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
      defaultValue: "00000000",
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
      defaultValue: "00000000",
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
      defaultValue: "test",
    },
    {
      name: "age",
      type: "number",
      label: "Age",
      placeholder: "Enter your age",
      // min: 18,
      // max: 120,
      step: 1,
      validation: {
        required: "Age is required",
        min: {
          value: 18,
          message: "You must be at least 18 years old",
        },
        max: {
          value: 120,
          message: "Age cannot exceed 120 years",
        },
      },
      defaultValue: 25,
    },
    {
      name: "birthday",
      type: "date",
      label: "Birthday",
      placeholder: "Select your birthday",
      // min: "1900-01-01",
      // max: new Date().toISOString().split("T")[0], // Today's date as max
      validation: {
        required: "Birthday is required",
        min: {
          value: "1900-01-01",
          message: "You must be at least 18 years old",
        },
        max: {
          value: new Date().toISOString().split("T")[0],
          message: "Age cannot exceed 120 years",
        },
      },
      defaultValue: "2000-01-01",
    },
    {
      name: "meetingTime",
      type: "time",
      label: "Preferred Meeting Time",
      placeholder: "Select your preferred meeting time",
      // min: "09:00",
      // max: "18:00",
      step: 900, // 15 minutes (in seconds)
      validation: {
        required: "Meeting time is required",
        min: {
          value: "09:00",
          message: "You must be at least 18 years old",
        },
        max: {
          value: "18:00",
          message: "Age cannot exceed 120 years",
        },
      },
      defaultValue: "11:00",
    },
    {
      name: "appointment",
      type: "datetime-local",
      label: "Appointment Date & Time",
      placeholder: "Select your appointment date and time",
      min: new Date().toISOString().slice(0, 16), // From now
      max: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().slice(0, 16), // 3 months from now
      validation: {
        required: "Appointment date and time is required",
        // min: {
        //   value: new Date().toISOString().slice(0, 16), // From now
        //   message: "You must be at least 18 years old",
        // },
        // max: {
        //   value: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().slice(0, 16), // 3 months from now
        //   message: "Age cannot exceed 120 years",
        // },
      },
      defaultValue: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().slice(0, 16), // Default to 1 week from now
    },
    {
      name: "alternateDate",
      type: "date",
      label: "Alternate Date (String Format)",
      placeholder: "Select an alternate date",
      validation: {
        required: "Alternate date is required",
      },
      // Using a non-standard date string format to test conversion
      defaultValue: "Jan 15, 2023",
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
      <FormBuilder fields={fields} submit={{ handleEvent: handleSubmit }} title="FormBuilder Test Page" />

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
