import ReactInputMask from "react-input-mask";
import "./Input.css";

export default function Input({
  labelText,
  placeholderText,
  subtitleText,
  inputClassName,
  labelClassName,
  type,
  textarea,
  phoneMask,
  ...props
}) {
  const Tag = textarea ? "textarea" : phoneMask ? ReactInputMask : "input";
  const inputClassNames = "input " + (inputClassName || "");
  const labelClassNames = "label " + (labelClassName || "");
  return (
    <label className={labelClassNames}>
      <span className={`label-name ${subtitleText ? "subtitled" : ""}`}>
        {labelText}
        <span className="label-subtitle">{subtitleText}</span>
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
