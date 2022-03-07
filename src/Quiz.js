import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import LeaderBoard from "./LeaderBoard";

function Quiz() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [displayLeaders, setDisplayLeaders] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    if (timeRemaining === 0) timesUp();
    return function cleanup() {
      clearTimeout();
    };
  }, [timeRemaining]);

  function timesUp() {
    setDisplayLeaders(true);
    cleanup();
    setTimeRemaining("--");
  }
  return (
    <div>
      Quiz
      <h1>{timeRemaining} seconds remaining</h1>
      {displayLeaders ? <LeaderBoard /> : null}
    </div>
  );
}

export default Quiz;
