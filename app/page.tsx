"use client";
import { useState } from "react";
import MainStory from "./components/MainStory";
import RegPlateButtons from "./components/RegPlateButtons";
import { BUTTON_LABELS } from "./const";
import IntroText from "./components/IntroText";
import FailMessage from "./components/FailMessage";
import SuccessMessage from "./components/SuccessMessage";
import { ChakraProvider, Container, defaultSystem } from "@chakra-ui/react";

export default function Home() {
  const handleBadAttempt = () => {
    setIsButtonsDisabled(true);
    setHasTriedOnce(true);
    setIsCorrectAttempt(false);
  };

  const handleCorrectAttempt = () => {
    setIsButtonsDisabled(true);
    setHasTriedOnce(true);
    setIsCorrectAttempt(true);
  };

  const proceedToMainStory = () => {
    setIsMainStoryVisible(true);
  };

  const [isCorrectAttempt, setIsCorrectAttempt] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [hasTriedOnce, setHasTriedOnce] = useState(false);
  const [isMainStoryVisible, setIsMainStoryVisible] = useState(false);

  return (
    <ChakraProvider value={defaultSystem}>
      <Container alignSelf="center" mx="1rem">
        <main
          style={{
            padding: "24px",
            fontFamily: "fantasy",
            fontSize: "20px",
            color: "red",
          }}
        >
          {!isCorrectAttempt && (
            <div>
              {!hasTriedOnce && <IntroText />}
              {!hasTriedOnce && (
                <RegPlateButtons
                  handleBadAttempt={handleBadAttempt}
                  handleCorrectAttempt={handleCorrectAttempt}
                  isButtonsDisabled={isButtonsDisabled}
                  buttonLabels={BUTTON_LABELS}
                />
              )}
              {hasTriedOnce && <FailMessage />}
            </div>
          )}
          {isCorrectAttempt && hasTriedOnce && !isMainStoryVisible && (
            <SuccessMessage proceedToMainStory={proceedToMainStory} />
          )}
          {isCorrectAttempt && isMainStoryVisible && <MainStory />}
        </main>
      </Container>
    </ChakraProvider>
  );
}
