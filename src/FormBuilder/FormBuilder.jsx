import React from "react";
import { useForm } from "react-hook-form";
import "./FormBuilder.css";

/**
 * FormBuilder Component
 * Dynamically generates forms based on configuration
 * @param {Object} props - Component props
 * @param {Array} props.fields - Array of field configurations
 * @param {Function} props.onSubmit - Form submission handler
 * @param {String} props.title - Form title
 * @param {Object} props.additionalContent - Additional content to render before/after submit button
 * @param {React.ReactNode} props.additionalContent.beforeSubmit - Content to render before submit button
 * @param {React.ReactNode} props.additionalContent.afterSubmit - Content to render after submit button
 */
const FormBuilder = ({ fields, onSubmit, title, additionalContent = { beforeSubmit: null, afterSubmit: null } }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <div className="form-group" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              {...register(field.name, {
                ...field.validation,
                validate: field.validation.validate ? (value) => field.validation.validate(value, { getValues }) : undefined,
              })}
              className={errors[field.name] ? "error" : ""}
              placeholder={field.placeholder}
            />
            {errors[field.name] && <span className="error-message">{errors[field.name].message}</span>}
          </div>
        );
      case "textarea":
        return (
          <div className="form-group" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <textarea id={field.name} rows={field.rows || 5} {...register(field.name, field.validation)} className={errors[field.name] ? "error" : ""} placeholder={field.placeholder} />
            {errors[field.name] && <span className="error-message">{errors[field.name].message}</span>}
          </div>
        );
      case "checkbox":
        return (
          <div className="form-options" key={field.name}>
            <div className={field.className}>
              <input type="checkbox" id={field.name} {...register(field.name)} onChange={field.onChange} checked={field.checked} />
              <label htmlFor={field.name}>{field.label}</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-page">
      <h1>{title}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {fields.map(renderField)}
        {additionalContent.beforeSubmit}
        <button type="submit" className="submit-button">
          Submit
        </button>
        {additionalContent.afterSubmit}
      </form>
    </div>
  );
};

export default FormBuilder;
