import { useState } from "react";
import { unique } from "../../../hooks/unique";

export default function MultipleInput({ role, setRole, options }) {
  const [isActive, setIsActive] = useState([false]);

  function handleAdd() {
    const selects = [...role, []];
    const active = [...isActive, false];
    setRole(selects);
    setIsActive(active);
  }

  function handleDelete(i) {
    const selects = [...role];
    selects.splice(i, 1);
    setRole(selects);
  }

  function handleChange(onChangeValue, i) {
    const activeSelects = [...isActive];
    activeSelects[i] = !activeSelects[i];

    const inputData = [...role];
    inputData[i] = onChangeValue.target.innerText;

    setRole(inputData);
    setIsActive(activeSelects);
  }

  return (
    <div className="label role-label" id="role">
      <span className="label-name subtitled">
        Role
        <span className="label-subtitle">You can choose more than one</span>
      </span>
      <div className="inputs-wrapper">
        {role.map((data, i) => {
          return (
            <div className="select-wrapper" key={i}>
              <div
                className={`input select ${
                  isActive[i] ? "active" : ""
                } role-select`}
              >
                <div
                  className="select-btn"
                  onClick={(e) => {
                    handleChange(e, i);
                  }}
                >
                  {role[i].length !== 0 ? (
                    role[i]
                  ) : (
                    <span className="default">Choose from the list</span>
                  )}
                </div>
                {isActive[i] && (
                  <div className="select-content">
                    {unique(options, role).map((option) => (
                      <div
                        className="select-item"
                        onClick={(e) => {
                          const values = [...role];
                          values[i] = e.target.innerText;
                          setRole(values);

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
              {role.length < 6 && i === 0 ? (
                <button
                  className="btn btn-form plus"
                  onClick={handleAdd}
                  key={i + 1}
                >
                  <Plus />
                </button>
              ) : (
                <button
                  className="btn btn-form delete"
                  onClick={() => {
                    handleDelete(i);
                  }}
                  key={i + 1}
                >
                  <Delete />
                </button>
              )}
            </div>
          );
        })}
      </div>
      <span className="required">Required field</span>
    </div>
  );
}

function Plus() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="color"
        d="M12 6.52637V17.4737"
        stroke="#686DAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="color"
        d="M17.4736 12L6.52626 12"
        stroke="#686DAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        className="color"
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="2.75"
        stroke="#686DAA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Delete() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="color"
        d="M3.5 6.50049H12H20.5"
        stroke="#7B7FB5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="color"
        d="M7.99927 6.5V4.8C7.99927 4.32261 8.19493 3.86477 8.54321 3.52721C8.89149 3.18964 9.36387 3 9.85641 3H14.1861C14.6786 3 15.151 3.18964 15.4993 3.52721C15.8475 3.86477 16.0432 4.32261 16.0432 4.8V6.51889M18.4993 6.5V19.2C18.4993 19.6774 18.3036 20.1352 17.9553 20.4728C17.607 20.8104 17.1347 21 16.6421 21H7.35641C6.86387 21 6.39149 20.8104 6.04321 20.4728C5.69493 20.1352 5.49927 19.6774 5.49927 19.2V6.5H18.4993Z"
        stroke="#7B7FB5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="color"
        d="M10 11V17"
        stroke="#7B7FB5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="color"
        d="M14 11V17"
        stroke="#7B7FB5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
