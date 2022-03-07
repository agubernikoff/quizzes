import React, { useState, useEffect } from "react";
import LeaderBoard from "./LeaderBoard";

function Quiz() {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [displayLeaders, setDisplayLeaders] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => (timeRemaining > 0 ? setTimeRemaining(timeRemaining - 1) : null),
      1000
    );
    if (timeRemaining === 0) timesUp();
    return function cleanup() {
      clearTimeout(timer);
    };
  });

  function timesUp() {
    setDisplayLeaders(true);
    // setTimeRemaining("--");
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
