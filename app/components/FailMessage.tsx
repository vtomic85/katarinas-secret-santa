import { VStack, Text } from "@chakra-ui/react";
import React from "react";

function FailMessage(): JSX.Element {
  return (
    <VStack>
      <Text>
        No! Dammit! You ruined everything! Now you have to refresh the whole
        page! Be more careful this time!
      </Text>
    </VStack>
  );
}

export default FailMessage;
