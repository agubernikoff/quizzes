import React, { useState, useEffect } from "react";
// import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "./Loading";

function Quiz({ questions, category }) {
  //   const [timeRemaining, setTimeRemaining] = useState(10);
  const [scoreArray, setScoreArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const history = useHistory();

  console.log(questions);

  const mappedQs = questions.map((q) => (
    <Question handleAnswerClick={handleAnswerClick} key={q.id} q={q} />
  ));

  function handleAnswerClick(clickedAnswer, e) {
    for (const q of questions) {
      if (clickedAnswer === q.correctAnswer) {
        console.log(q.correctAnswer);
        e.target.parentNode.className = "questions-correct";
        setScoreArray((scoreArray) => [...scoreArray, clickedAnswer]);
        console.log(e.target.parentNode);
        break;
      } else e.target.parentNode.className = "questions-wrong";
      console.log("wrong");

      console.log(e.target.parentNode.className);
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    }
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
      {questions[1] ? mappedQs[currentQuestion] : <Loading />}
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
