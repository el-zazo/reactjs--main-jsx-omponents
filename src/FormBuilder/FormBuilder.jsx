import React from "react";
import { useForm } from "react-hook-form";
import "./FormBuilder.css";
// Components
import MainInputs from "./Tags/MainInputs/MainInputs";
import Textarea from "./Tags/Textarea/Textarea";
import Checkbox from "./Tags/Checkbox/Checkbox";
import Select from "./Tags/Select/Select";
import ManyInputs from "./Tags/ManyInputs/ManyInputs";

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
  const { register, handleSubmit, getValues, formState, setValue, clearErrors } = useForm();
  const { errors } = formState;

  const renderField = (field) => {
    // Process field validation if present
    if (field?.validation) {
      // Store the original validate function to avoid recursive calls
      const originalValidate = field.validation?.validate;

      field.validation = {
        ...field.validation,
        validate: originalValidate ? (value) => originalValidate(value, { getValues }) : undefined,
      };
    }

    // Process field validation and prepare field for rendering
    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "number":
      case "date":
      case "time":
      case "datetime-local":
        return <MainInputs field={field} register={register} errors={errors} />;
      case "textarea":
        return <Textarea field={field} register={register} errors={errors} />;
      case "checkbox":
        return <Checkbox field={field} register={register} errors={errors} />;
      case "select":
        return <Select field={field} register={register} errors={errors} />;
      case "many-inputs":
        return <ManyInputs field={field} register={register} getValues={getValues} setValue={setValue} clearErrors={clearErrors} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-page">
      <h1>{title}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {fields.map((field, index) => (
          <React.Fragment key={field.name || `field-${index}`}>{renderField(field)}</React.Fragment>
        ))}

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
