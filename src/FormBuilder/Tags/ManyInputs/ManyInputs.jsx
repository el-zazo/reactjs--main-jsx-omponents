import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./ManyInputs.css";
// Utils
import { getInputAttributes } from "../utils/inputUtils";

/**
 * ManyInputs Component
 * Renders a dynamic list of input fields that can be added or removed
 * The first input has an add button, subsequent inputs have remove buttons
 */
export default function ManyInputs({ field, register, getValues, setValue, clearErrors, errors = {} }) {
  // Get min and max inputs configuration or use defaults
  const minInputs = field.minInputs !== undefined ? field.minInputs : 1;
  const maxInputs = field.maxInputs !== undefined ? field.maxInputs : Infinity;

  // Initialize with minInputs or default values if provided
  const [inputs, setInputs] = useState(() => {
    // If default values are provided and valid, use them
    if (field.defaultValue && Array.isArray(field.defaultValue) && field.defaultValue.length > 0) {
      // Ensure we have at least minInputs
      if (field.defaultValue.length >= minInputs) {
        return field.defaultValue;
      } else {
        // Pad with empty strings to reach minInputs
        return [...field.defaultValue, ...Array(minInputs - field.defaultValue.length).fill("")];
      }
    }

    // Otherwise create an array with minInputs empty strings
    return Array(minInputs).fill("");
  });

  // Track which input is currently focused
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Add a new empty input to the list if below maxInputs
  const addInput = () => {
    if (inputs.length < maxInputs) {
      setInputs([...inputs, ""]);
    }
  };

  // Remove an input at the specified index if above minInputs
  const removeInput = (indexToRemove) => {
    if (inputs.length > minInputs) {
      // Set inputs
      const currentValues = getValues(field.name);
      const newInputs = currentValues.filter((_, index) => index !== indexToRemove);
      setInputs(newInputs);
      setValue(field.name, newInputs);

      // Set errors
      clearErrors(field.name);
    }
  };

  // Handle focus and blur events
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };
  const handleBlur = () => {
    setFocusedIndex(null);
  };

  // Check if we can add more inputs
  const canAddMore = inputs.length < maxInputs;

  // Check if we can remove inputs
  const canRemove = inputs.length > minInputs;

  return (
    <div className="form-group many-inputs-container" key={field.name}>
      <label>{field.label}</label>

      {inputs.map((inputValue, index) => (
        <div className="many-inputs-row-container" key={`${field.name}-${index}`}>
          <div className={`many-inputs-row ${errors[field.name]?.[index] ? "error" : ""} ${focusedIndex === index ? "focused" : ""}`}>
            <input
              {...getInputAttributes(field, errors, `${field.name}[${index}]`)}
              {...register(`${field.name}[${index}]`, field.validation)}
              defaultValue={inputValue}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
            />

            {/* Add button for the first input, remove button for subsequent inputs */}
            {index === 0 ? (
              <button type="button" className={`btn-add ${canAddMore ? "" : "disabled"}`} onClick={addInput} disabled={!canAddMore}>
                <FaPlus />
              </button>
            ) : (
              <button type="button" className={`btn-remove ${canRemove ? "" : "disabled"}`} onClick={() => removeInput(index)} disabled={!canRemove}>
                <FaMinus />
              </button>
            )}
          </div>

          {errors[field.name] && errors[field.name]?.[index] && <span className="error-message">{errors[field.name]?.[index]?.message}</span>}
        </div>
      ))}
    </div>
  );
}
