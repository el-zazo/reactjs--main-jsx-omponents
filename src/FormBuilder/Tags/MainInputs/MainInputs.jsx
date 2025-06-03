/**
 * MainInputs Component
 * Renders various input field types with validation
 * Supports text, email, password, number inputs with min/max constraints,
 * and date/time inputs with min/max constraints
 */

// Utils
import { getInputAttributes } from "../utils/inputUtils";

export default function MainInputs({ field, register, errors }) {
  return (
    <div className="form-group" key={field.name}>
      <label htmlFor={field.name}>{field.label}</label>
      <input {...getInputAttributes(field, errors)} {...register(field.name, field.validation)} />
      {errors[field.name] && <span className="error-message">{errors[field.name].message}</span>}
    </div>
  );
}
