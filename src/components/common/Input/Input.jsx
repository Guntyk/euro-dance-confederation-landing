import { unique } from "../../../hooks/unique";
import ReactInputMask from "react-input-mask";
import { useState } from "react";
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
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const Tag = textarea ? "textarea" : phoneMask ? ReactInputMask : "input";
  const inputClassNames = "input " + (inputClassName || "");
  const labelClassNames = "label " + (labelClassName || "");
  const selectClassNames = "select input " + (selectClassName || "");

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
        />
      ) : (
        <div className={`input select ${isActive ? "active" : ""}`}>
          {select && (
            <>
              <div
                className="select-btn"
                onClick={() => setIsActive(!isActive)}
              >
                {role && name === "role" ? (
                  role
                ) : country && name === "country" ? (
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
                        name === "role" ? setRole(option) : setCountry(option);
                        setIsActive(false);
                      }}
                      key={option}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
      <span className="required">Required field</span>
    </label>
  );
}
