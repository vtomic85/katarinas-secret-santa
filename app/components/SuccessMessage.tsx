import React from "react";
import AppButton from "./AppButton";
import { Text, VStack } from "@chakra-ui/react";
interface SuccessMessageProps {
  proceedToMainStory: () => void;
}

function SuccessMessage(props: SuccessMessageProps): JSX.Element {
  const { proceedToMainStory } = props;
  return (
    <VStack>
      <Text>Yes! Correct! It's really you! You may now proceed.</Text>
      <AppButton
        onClick={proceedToMainStory}
        isButtonsDisabled={false}
        label="Proceed"
      />
    </VStack>
  );
}

export default SuccessMessage;
