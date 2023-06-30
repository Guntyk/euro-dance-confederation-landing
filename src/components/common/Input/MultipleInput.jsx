import { useState } from "react";
import { unique } from "../../../hooks/unique";

export default function MultipleInput({ role, setRole, options }) {
  const [isActive, setIsActive] = useState([false]);
  const [val, setVal] = useState([""]);

  function handleClick() {
    const selects = [...val, []];
    const active = [...isActive, false];
    setVal(selects);
    setIsActive(active);
  }

  function handleChange(onChangeValue, i) {
    const activeSelects = [...isActive];
    activeSelects[i] = !activeSelects[i];

    const inputData = [...val];
    inputData[i] = onChangeValue.target.innerText;

    setVal(inputData);
    setIsActive(activeSelects);
  }

  return (
    <div className="label role-label" id="role">
      <span className="label-name subtitled">
        Role
        <span className="label-subtitle">You can choose more than one</span>
      </span>
      <div className="inputs-wrapper">
        {val.map((data, i) => {
          return (
            <div className="select-wrapper">
              <div
                className={`input select ${
                  isActive[i] ? "active" : ""
                } role-select`}
                key={i}
              >
                <div
                  className="select-btn"
                  onClick={(e) => {
                    handleChange(e, i);
                  }}
                >
                  {val[i].length !== 0 ? (
                    val[i]
                  ) : (
                    <span className="default">Choose from the list</span>
                  )}
                </div>
                {isActive[i] && (
                  <div className="select-content">
                    {unique(options, val).map((option) => (
                      <div
                        className="select-item"
                        onClick={(e) => {
                          const value = [...val];
                          value[i] = e.target.innerText;
                          setVal(value);

                          const active = [...isActive];
                          active[i] = false;
                          setIsActive(active);
                        }}
                        key={option}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {val.length === i + 1 && val.length < 6 && (
                <button className="btn plus" onClick={handleClick}></button>
              )}
            </div>
          );
        })}
      </div>
      <span className="required">Required field</span>
    </div>
  );
}
