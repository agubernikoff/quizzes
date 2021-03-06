import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuizList({ categories, setQuestions }) {
  function fetchOnClick(c) {
    fetch(
      `https://shielded-brook-55953.herokuapp.com/https://api.trivia.willfry.co.uk/questions?categories=${c}&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => setQuestions(data));
  }

  const mappedcategories = categories.map((c) => (
    <ul key={c}>
      <Link to={`quiz/${c}`} onClick={() => fetchOnClick(c)}>
        {c.replaceAll("_", " ")}
      </Link>
    </ul>
  ));
  return (
    <div className="quiz-list-container">
      <div className="quiz-list">
        <h2>Quiz List</h2>
        {mappedcategories}
      </div>
    </div>
  );
}

export default QuizList;
