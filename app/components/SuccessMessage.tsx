import React from "react";
import Button from "./Button";

interface SuccessMessageProps {
  proceedToMainStory: () => void;
}

function SuccessMessage(props: SuccessMessageProps): JSX.Element {
  const { proceedToMainStory } = props;
  return (
    <>
      <p>Yes! Correct! It's really you! You may now proceed.</p>
      <Button
        onClick={proceedToMainStory}
        isButtonsDisabled={false}
        label="Proceed"
      />
    </>
  );
}

export default SuccessMessage;
