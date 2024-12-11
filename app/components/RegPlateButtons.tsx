import React from "react";
import Button from "./Button";

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
    <div>
      <Button
        onClick={handleBadAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[0]}
      />
      <Button
        onClick={handleCorrectAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[1]}
      />
      <Button
        onClick={handleBadAttempt}
        isButtonsDisabled={isButtonsDisabled}
        label={buttonLabels[2]}
      />
    </div>
  );
}

export default RegPlateButtons;
