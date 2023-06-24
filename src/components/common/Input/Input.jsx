import "./Input.css";

export default function Input({
  labelText,
  placeholderText,
  subtitleText,
  inputClassName,
  labelClassName,
  type,
  textarea,
  ...props
}) {
  const Tag = textarea ? "textarea" : "input";
  const inputClassNames = "input " + inputClassName || "";
  const labelClassNames = "label " + labelClassName || "";
  return (
    <label className={labelClassNames}>
      <span className="label-name">
        {labelText}
        <span className="subtitle">{subtitleText}</span>
      </span>
      <Tag
        {...props}
        className={inputClassNames}
        type={type || "text"}
        placeholder={placeholderText || ""}
      />
    </label>
  );
}
