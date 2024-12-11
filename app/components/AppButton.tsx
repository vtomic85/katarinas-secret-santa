import { Button } from "@chakra-ui/react";
import React from "react";

interface AppButtonProps {
  onClick: () => void;
  isButtonsDisabled: boolean;
  label: string;
}

function AppButton(props: AppButtonProps): JSX.Element {
  const { onClick, isButtonsDisabled, label } = props;
  return (
    <Button
      onClick={onClick}
      disabled={isButtonsDisabled}
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
    >
      {label}
    </Button>
  );
}

export default AppButton;
