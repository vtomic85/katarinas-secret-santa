import { VStack, Text } from "@chakra-ui/react";
import React from "react";

function IntroText(): JSX.Element {
  return (
    <VStack>
      <Text>Hello,</Text>
      <Text>
        Before we proceed, I just need to verify that you are really... you.
      </Text>
      <Text>
        Can you please click the correct registration plate number of your car?
      </Text>
    </VStack>
  );
}

export default IntroText;
