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
      p={8}
      bgColor="red"
      _hover={{ bgColor: "red.300", color: "red" }}
      fontFamily={"monospace"}
      fontSize={24}
      fontWeight={"bold"}
      cursor={"pointer"}
      borderRadius={"8px"}
      color={"white"}
      m={1}
    >
      {label}
    </Button>
  );
}

export default AppButton;
