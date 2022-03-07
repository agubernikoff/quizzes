import React from "react";

function QuizList({ quiz, onQuizClick }) {
  function handleQuizClick() {
    onQuizClick(quiz);
  }
  return (
    <div>
      QuizList
      <ul>
        <li onClick={handleQuizClick}>{quiz}</li>
      </ul>
    </div>
  );
}

export default QuizList;
