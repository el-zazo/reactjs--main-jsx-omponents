/**
 * Select Component
 * Renders a select dropdown field with options
 * Supports both single and multiple value selection
 */

import React from "react";
import "./Select.css";

export default function Select({ field, register, errors = {} }) {
  return (
    <div className="form-group" key={field.name}>
      <label htmlFor={field.name}>{field.label}</label>
      <select
        id={field.name}
        {...register(field.name, field.validation)}
        className={errors[field.name] ? "error" : ""}
        multiple={field.multiple || false}
        defaultValue={field.defaultValue || (field.multiple ? [] : "")}
      >
        {field.placeholder && !field.multiple && (
          <option value="" disabled>
            {field.placeholder}
          </option>
        )}
        {field.options?.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[field.name] && <span className="error-message">{errors[field.name]?.message}</span>}
    </div>
  );
}
