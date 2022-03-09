import React from "react";
import { Link } from "react-router-dom";

function QuizList({ categories }) {
  const mappedcategories = categories.map((c) => (
    <ul key={c}>
      <Link to={`quiz/${c}`}>{c.replaceAll('_',' ')}</Link>
    </ul>
  ));
  return (
    <div className="quiz-list">
      <h2>Quiz List</h2>
      {mappedcategories}
    </div>
  );
}

export default QuizList;
