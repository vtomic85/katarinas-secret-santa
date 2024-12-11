import React from "react";
import Image from "next/image";
import { VStack, Text } from "@chakra-ui/react";

function MainStory(): JSX.Element {
  return (
    <VStack style={{ fontFamily: "fantasy", fontSize: "20px", color: "red" }}>
      <Text>Hi Katarina,</Text>
      <Text>
        Wow, you've made some serious progress in solving these puzzles! I'm
        proud of you!
      </Text>
      <Text>
        You're very close to your{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>gift</span>,
        don't give up now...
      </Text>
      <Text>
        Do you remember that{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>e-mail</span>{" "}
        that you received? Hopefully you didn't delete it...
      </Text>
      <Text>
        It contains{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>
          four numbers
        </span>
        . When combined, they form the code for the{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>locker</span>.
      </Text>
      <Text>
        The locker is at the{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>2nd floor</span>.
      </Text>
      <Text>
        But which locker exactly is it? Well... It has to do something with your{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>birth date</span>
        ...
      </Text>
      <Text>
        Now go inspect all lockers and try to find out which one it is.
      </Text>
      <Text>Almost there... Good luck!</Text>
      <Text>Ho ho ho!</Text>
      <br />
      <Image src="/santa.png" alt="Santa" width={180} height={180} />
    </VStack>
  );
}

export default MainStory;
