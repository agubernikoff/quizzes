import React, { useState, useEffect } from "react";
// import LeaderBoard from "./LeaderBoard";
import Question from "./Question";
import Results from "./Results";
import { Link } from "react-router-dom";

function Quiz({ c }) {
  //   const [timeRemaining, setTimeRemaining] = useState(10);
  //   const [displayLeaders, setDisplayLeaders] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [scoreArray, setScoreArray] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  useEffect(
    () =>
      fetch(
        `https://api.trivia.willfry.co.uk/questions?categories=${c}&limit=5`
      )
        .then((resp) => resp.json())
        .then((data) => setQuestions(data)),
    []
  );
  console.log(questions[1]);

  const mappedQs = questions.map((q) => <Question handleAnswerClick={handleAnswerClick} key={q.id} q={q} />);


        
  function handleAnswerClick(clickedAnswer){
    const newQs = questions.filter((q)=> {
    if (clickedAnswer === q.correctAnswer){
      setScoreArray(scoreArray => [...scoreArray, clickedAnswer])
    } })}
  
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
  return (
    <div>
      {questions[1] === undefined ? <h4>Loading...</h4> : mappedQs}
      {score}
      <button><Link to={"/results"}>Submit</Link></button>
      {/* <h1>{timeRemaining} seconds remaining</h1>
      {displayLeaders ? <LeaderBoard /> : null} */}
    </div>
  );
}

export default Quiz;
