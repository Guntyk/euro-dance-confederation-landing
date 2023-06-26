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
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const Tag = textarea ? "textarea" : phoneMask ? ReactInputMask : "input";
  const inputClassNames = "input " + (inputClassName || "");
  const labelClassNames = "label " + (labelClassName || "");
  const selectClassNames = "select input " + (selectClassName || "");

  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  return (
    <label className={labelClassNames}>
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
    </label>
  );
}
