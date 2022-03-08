import React from "react";
import { Link } from "react-router-dom";

function QuizList({ categories }) {
  const mappedcategories = categories.map((c) => (
    <li key={c}>
      <Link to={`quiz/${c}`}>{c}</Link>
    </li>
  ));
  return (
    <div>
      QuizList
      <ul>{mappedcategories}</ul>
    </div>
  );
}

export default QuizList;
