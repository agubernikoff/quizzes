import React from "react";
import { Link } from "react-router-dom";

function QuizList({ categories }) {
  const mappedcategories = categories.map((c) => (
    <li key={c}>
      <Link to={`quiz/${c}`}>{c.replaceAll('_',' ')}</Link>
    </li>
  ));
  return (
    <div>
      Quiz List
      <ul>{mappedcategories}</ul>
    </div>
  );
}

export default QuizList;
