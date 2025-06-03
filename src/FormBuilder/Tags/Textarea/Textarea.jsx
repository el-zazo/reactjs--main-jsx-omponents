export default function Textarea({ field, register, errors = {} }) {
  return (
    <div className="form-group" key={field.name}>
      <label htmlFor={field.name}>{field.label}</label>
      <textarea
        id={field.name}
        rows={field.rows || 5}
        {...register(field.name, field.validation)}
        className={errors[field.name] ? "error" : ""}
        placeholder={field.placeholder}
        defaultValue={field.defaultValue || ""}
      />
      {errors[field.name] && <span className="error-message">{errors[field.name]?.message}</span>}
    </div>
  );
}
