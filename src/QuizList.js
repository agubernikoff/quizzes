import React from "react";

const categories = [
  "general_knowledge",
  "food_and_drink",
  "geography",
  "history",
  "literature",
  "movies",
  "music",
  "science",
  "society_and_culture",
  "sport_and_leisure",
];
function QuizList({ quiz, onQuizClick }) {
  const mappedcategories = categories.map((c) => (
    <li key={c} onClick={handleQuizClick}>
      {c}
    </li>
  ));
  function handleQuizClick(e) {
    onQuizClick(e.target.innerText);
  }
  return (
    <div>
      QuizList
      <ul>{mappedcategories}</ul>
    </div>
  );
}

export default QuizList;
