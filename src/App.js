import React, { useState, useEffect } from "react";
import Header from "./Header";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import "./index.css";

function App() {
  const [quizClicked, setQuizClicked] = useState("");
  function onQuizClick(quiz) {
    setQuizClicked(quiz);
  }
  console.log(quizClicked);

  return (
    <div className="App">
      App
      <Header />
      {quizClicked ? (
        <Quiz quizClicked={quizClicked} />
      ) : (
        <QuizList quiz="quiz" onQuizClick={onQuizClick} />
      )}
    </div>
  );
}

export default App;
