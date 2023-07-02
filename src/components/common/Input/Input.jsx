import { unique } from "../../../hooks/unique";
import ReactInputMask from "react-input-mask";
import { useEffect, useState } from "react";
import "./Select.css";
import "./Input.css";

export default function Input({
  labelText,
  placeholderText,
  subtitleText,
  inputClassName,
  labelClassName,
  selectClassName,
  type,
  textarea,
  select,
  options,
  name,
  role,
  country,
  setRole,
  setCountry,
  phoneMask,
  id,
  nonValid,
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const [val, setVal] = useState("");
  const Tag = textarea ? "textarea" : phoneMask ? ReactInputMask : "input";
  const inputClassNames =
    "input " +
    (inputClassName || "") +
    (nonValid && val.length === 0 ? "invalid" : "");
  const labelClassNames =
    "label " +
    (labelClassName || "") +
    (nonValid && val.length === 0 ? "invalid" : "");
  const selectClassNames = "select input " + (selectClassName || "");
  useEffect(() => {
    console.log(val);
  }, [val]);
  console.log(nonValid);
  return (
    <label className={labelClassNames} id={id}>
      <span className={`label-name ${subtitleText ? "subtitled" : ""}`}>
        {labelText}
        <span className="label-subtitle">{subtitleText}</span>
      </span>
      {!select ? (
        <Tag
          {...props}
          className={select ? selectClassNames : inputClassNames}
          type={type || "text"}
          placeholder={placeholderText || ""}
          name={name || "text"}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      ) : (
        <div
          className={`input select ${isActive ? "active" : ""} ${
            nonValid && val.length === 0 ? "invalid" : ""
          }`}
        >
          <div className="select-btn" onClick={() => setIsActive(!isActive)}>
            {country ? (
              country
            ) : (
              <span className="default">{placeholderText || ""}</span>
            )}
          </div>
          {isActive && (
            <div className="select-content">
              {unique(options).map((option) => (
                <div
                  className="select-item"
                  onClick={() => {
                    setVal(option);
                    setCountry(option);
                    setIsActive(false);
                  }}
                  key={option}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {nonValid && val.length === 0 && (
        <span className="required">Required field</span>
      )}
    </label>
  );
}
