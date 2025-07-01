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
 * @param {String} props.title - Form title
 * @param {Object} props.additionalContent - Additional content to render before/after submit button
 * @param {React.ReactNode} props.additionalContent.beforeSubmit - Content to render before submit button
 * @param {React.ReactNode} props.additionalContent.afterSubmit - Content to render after submit button
 * @param {Object} props.submit - Submit button configuration
 * @param {Function} props.submit.handleEvent - Submit event handler
 * @param {String} props.submit.text - Submit button text
 * @param {Object} props.cancel - Cancel button configuration
 * @param {Function} props.cancel.handleEvent - Cancel event handler
 * @param {String} props.cancel.text - Cancel button text
 */
const FormBuilder = ({
  fields,
  title,
  additionalContent = { beforeSubmit: null, afterSubmit: null },
  submit = { handleEvent: null, text: "Submit" },
  cancel = { handleEvent: null, text: "Cancel" },
}) => {
  const { register, handleSubmit, getValues, formState, setValue, clearErrors } = useForm();
  const { errors } = formState;

  const renderField = (field) => {
    const copiedField = { ...field }

    // Process field validation if present
    if (copiedField?.validation) {
      // Store the original validate function to avoid recursive calls
      const originalValidate = copiedField.validation?.validate;

      copiedField.validation = {
        ...copiedField.validation,
        validate: originalValidate ? (value) => originalValidate(value, { getValues }) : undefined,
      };
    }

    // Process field validation and prepare field for rendering
    switch (copiedField.type) {
      case "text":
      case "email":
      case "password":
      case "number":
      case "date":
      case "time":
      case "datetime-local":
        return <MainInputs field={copiedField} register={register} errors={errors} />;
      case "textarea":
        return <Textarea field={copiedField} register={register} errors={errors} />;
      case "checkbox":
        return <Checkbox field={copiedField} register={register} errors={errors} />;
      case "select":
        return <Select field={copiedField} register={register} errors={errors} />;
      case "many-inputs":
        return <ManyInputs field={copiedField} register={register} getValues={getValues} setValue={setValue} clearErrors={clearErrors} errors={errors} />;
      default:
        return null;
    }
  };

  // Handle cancel button click
  const handleCancel = (e) => {
    e.preventDefault();
    if (cancel.handleEvent) {
      cancel.handleEvent();
    }
  };

  return (
    <div className="form-page">
      <h1>{title}</h1>

      <form onSubmit={handleSubmit(submit.handleEvent)} className="form-container">
        {fields.map((field, index) => (
          <React.Fragment key={field.name || `field-${index}`}>{renderField(field)}</React.Fragment>
        ))}

        {additionalContent.beforeSubmit}
        <div className="form-buttons">
          {cancel.handleEvent && (
            <button type="button" className="cancel-button" onClick={handleCancel}>
              {cancel.text || "Cancel"}
            </button>
          )}
          <button type="submit" className="submit-button">
            {submit.text || "Submit"}
          </button>
        </div>
        {additionalContent.afterSubmit}
      </form>
    </div>
  );
};

export default FormBuilder;
