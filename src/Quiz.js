import React, { useState, useEffect } from "react";
// import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Quiz({ questions, category }) {
  //   const [timeRemaining, setTimeRemaining] = useState(10);
  const [scoreArray, setScoreArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const history = useHistory();

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

  const clickMe = (data) => {
    history.push("/results", { data });
  };

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
  console.log(category);
  // console.log(questions[1]);
  // console.log(questions[1].category.toLowerCase().includes(c.toLowerCase()));

  return (
    <div>
      {questions[1] ? mappedQs[currentQuestion] : <h4>Loading...</h4>}
      <button
        className="results-button"
        onClick={() => clickMe({ score, category })}
      >
        See Results
      </button>
      {/* <h1>{timeRemaining} seconds remaining</h1>
      {displayLeaders ? <LeaderBoard /> : null} */}
    </div>
  );
}

export default Quiz;
