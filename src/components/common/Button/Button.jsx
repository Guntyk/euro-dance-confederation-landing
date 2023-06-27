import "./Button.css";

export default function Button({ className, type, ...props }) {
  const buttonClass = "btn " + className || "";
  return (
    <button
      className={buttonClass}
      type={type || "button"}
      {...props}
      onClick={
        className === "primary"
          ? () => {
              document.getElementById("form").scrollIntoView();
            }
          : () => {}
      }
    >
      {className === "primary" ? "Start Now" : "Send"}
    </button>
  );
}
