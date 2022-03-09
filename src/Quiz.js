import React, { useState, useEffect } from "react";
// import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import Results from "./Results";
import { Link } from "react-router-dom";

function Quiz({ questions, c }) {
  //   const [timeRemaining, setTimeRemaining] = useState(10);
  //   const [displayLeaders, setDisplayLeaders] = useState(false);
  const [scoreArray, setScoreArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(questions);

  const mappedQs = questions.map((q) => (
    <Question handleAnswerClick={handleAnswerClick} key={q.id} q={q} />
  ));

  function handleAnswerClick(clickedAnswer) {
    const foundAnswer = scoreArray.find((score) => score === clickedAnswer);
    questions.forEach((q) => {
      if (clickedAnswer === q.correctAnswer && foundAnswer === undefined)
        setScoreArray((scoreArray) => [...scoreArray, clickedAnswer]);
    });
    setCurrentQuestion(currentQuestion + 1);
  }
  console.log(scoreArray);

  const score = scoreArray.length;

  //   useEffect(() => {
  //     const timer = setTimeout(
  //       () => (timeRemaining > 0 ? setTimeRemaining(timeRemaining - 1) : null),
  //       1000
  //     );
  //     if (timeRemaining === 0) timesUp();
  //     return function cleanup() {
  //       clearTimeout(timer);
  //     };
  //   });
  //   function timesUp() {
  //     setDisplayLeaders(true);
  //     // setTimeRemaining("--");
  //   }
  // console.log(c);
  // console.log(questions[1]);
  // console.log(questions[1].category.toLowerCase().includes(c.toLowerCase()));
  return (
    <div>
      {questions[1] ? mappedQs[currentQuestion] : <h4>Loading...</h4>}
      {score}
      <button>
        <Link to={"/results"}>Submit</Link>
      </button>
      {/* <h1>{timeRemaining} seconds remaining</h1>
      {displayLeaders ? <LeaderBoard /> : null} */}
    </div>
  );
}

export default Quiz;
