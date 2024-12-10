"use client";
import { useState } from "react";
import Story from "./components/Story";

export default function Home() {
  const handleBadAttempt = () => {
    setIsButtonsDisabled(true);
    alert(
      "No! Dammit! You ruined everything! Now you have to refresh the whole page! Be more careful this time!"
    );
    setIsCorrectAttempt(false);
  };

  const handleCorrectAttempt = () => {
    setIsButtonsDisabled(true);
    alert("Correct! You may proceed.");
    setIsCorrectAttempt(true);
  };

  const [isCorrectAttempt, setIsCorrectAttempt] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);

  return (
    <main style={{ padding: "24px" }}>
      {!isCorrectAttempt && (
        <div style={{ fontFamily: "fantasy", fontSize: "20px", color: "red" }}>
          <p>Hello,</p>
          <p>
            Before we proceed, I just need to verify that you are really... you.
          </p>
          <p>
            Can you please click the correct registration plate number of your
            car?
          </p>
          <button
            id="button1"
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
            onClick={handleBadAttempt}
            disabled={isButtonsDisabled}
          >
            BG-2138-LT
          </button>
          <button
            id="button2"
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
            onClick={handleCorrectAttempt}
            disabled={isButtonsDisabled}
          >
            BG-6666-XX
          </button>
          <button
            id="button3"
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
            onClick={handleBadAttempt}
            disabled={isButtonsDisabled}
          >
            PZ-2305-KK
          </button>
        </div>
      )}
      {isCorrectAttempt && <Story />}
    </main>
  );
}
