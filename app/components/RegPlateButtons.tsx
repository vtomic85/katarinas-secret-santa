import React from "react";
import AppButton from "./AppButton";
import { VStack } from "@chakra-ui/react";

interface RegPlateButtonsProps {
  handleBadAttempt: () => void;
  handleCorrectAttempt: () => void;
  isButtonsDisabled: boolean;
  buttonLabels: string[];
}

function RegPlateButtons(props: RegPlateButtonsProps): JSX.Element {
  const {
    handleBadAttempt,
    handleCorrectAttempt,
    isButtonsDisabled,
    buttonLabels,
  } = props;
  return (
    <VStack>
      <AppButton
        onClick={handleBadAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[0]}
      />
      <AppButton
        onClick={handleCorrectAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[1]}
      />
      <AppButton
        onClick={handleBadAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[2]}
      />
    </VStack>
  );
}

export default RegPlateButtons;
