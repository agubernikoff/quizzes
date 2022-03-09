import React from "react";
import { Link } from "react-router-dom";

function Header({ setQuestions }) {
  return (
    <header>
      <h1>YOU'RE A QUIZZARD</h1>
      <span className="logo">
        <img
          src="https://www.clipartmax.com/png/full/235-2355945_brain-thinking-clipart-clipartfox-thinking-brain-clipart.png"
          alt="thinking"
        ></img>
      </span>
      <div className="home-link">
        <Link to="/" onClick={() => setQuestions([])}>
          Home
        </Link>
      </div>
      <div className="leaders-link">
        <Link to="leaders">Leader Board</Link>
      </div>
    </header>
  );
}

export default Header;
