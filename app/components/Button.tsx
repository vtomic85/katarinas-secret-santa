import React from "react";

interface ButtonProps {
  onClick: () => void;
  isButtonsDisabled: boolean;
  label: string;
}
function Button(props: ButtonProps): JSX.Element {
  const { onClick, isButtonsDisabled, label } = props;
  return (
    <button
      style={{
        fontFamily: "monospace",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "8px",
        margin: "2px",
        cursor: "pointer",
        borderRadius: "8px",
        backgroundColor: "red",
        color: "white",
      }}
      onClick={onClick}
      disabled={isButtonsDisabled}
    >
      {label}
    </button>
  );
}

export default Button;
