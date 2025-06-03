export default function Checkbox({ field, register, errors = {} }) {
  return (
    <div className="form-options" key={field.name}>
      <div className={field.className}>
        <input
          type="checkbox"
          id={field.name}
          {...register(field.name, field.validation)}
          onChange={field.onChange}
          defaultChecked={field.defaultValue || field.defaultChecked || false}
          className={errors[field.name] ? "error" : ""}
        />
        <label htmlFor={field.name}>{field.label}</label>
        {errors[field.name] && <span className="error-message">{errors[field.name].message}</span>}
      </div>
    </div>
  );
}
