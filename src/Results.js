import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Results() {
  const [input, setInputValue] = useState("");
  const history = useHistory();
  const score = history.location.state.data.score;
  const category = history.location.state.data.c.replaceAll("_", " ");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  console.log(input);

  function handleSubmit(e) {
    e.preventDefault();
    const newScore = {
      category: category,
      score: score,
      name: input,
    };
    fetch("http://localhost:3001/leaders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newScore),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    setInputValue("");
    history.push("/leaders");
  }

  return (
    <div className="results">
      <h2>Results</h2>
      <p>category: {category}</p>
      <p>Score: {score}</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={input}
          onChange={handleChange}
        ></input>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Results;
