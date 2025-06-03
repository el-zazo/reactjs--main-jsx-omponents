/**
 * Input Utilities
 * Shared functions for handling input attributes and validation
 * Used by MainInputs and ManyInputs components
 */

// Date and time input types
const dateTimeTypes = ["date", "datetime-local", "time"];

// Input types that support constraints (min, max, step)
const constraintTypes = ["number", ...dateTimeTypes];

// Format date values based on input type
const formatters = {
  date: (date) => date.toISOString().split("T")[0],
  "datetime-local": (date) => date.toISOString().slice(0, 16),
  time: (date) => date.toTimeString().slice(0, 5),
};

/**
 * Validate and format string date values
 * @param {string} value - The date/time value to format
 * @param {string} type - The input type (date, datetime-local, time)
 * @returns {string} - The formatted date/time value
 */
export const formatStringDateValue = (value, type) => {
  try {
    // Handle time strings specially
    const dateObj = type === "time" ? new Date(`1970-01-01T${value}`) : new Date(value);

    if (!isNaN(dateObj.getTime())) {
      return formatters[type](dateObj);
    }
  } catch (error) {
    console.warn(`Failed to parse date/time value: ${value}`);
  }

  return value; // Return original if parsing fails
};

/**
 * Prepare common input attributes based on field configuration
 * @param {Object} field - The field configuration object
 * @param {Object} errors - Form errors object
 * @param {string} [fieldName] - Optional custom field name (for array fields)
 * @returns {Object} - The prepared input attributes
 */
export const getInputAttributes = (field, errors, fieldName = null) => {
  const name = fieldName || field.name;

  const attributes = {
    id: name,
    type: field.type || "text",
    className: errors[name] ? "error" : "",
    placeholder: field.placeholder,
    defaultValue: field.defaultValue || "",
  };

  // Add constraint attributes for number and date/time inputs
  if (constraintTypes.includes(field.type)) {
    // Add min, max, step attributes if defined
    ["min", "max", "step"].forEach((attr) => {
      if (field[attr] !== undefined && field[attr] !== null) {
        attributes[attr] = field[attr];
      }
    });
  }

  // Process date/time default values
  if (dateTimeTypes.includes(field.type) && field.defaultValue) {
    attributes.defaultValue = formatStringDateValue(field.defaultValue, field.type);
  }

  return attributes;
};

// Export constants for use in components
export { dateTimeTypes, constraintTypes };
