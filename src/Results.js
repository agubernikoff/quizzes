import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Results() {
  const [input, setInputValue] = useState("");
  const history = useHistory();
  const score = history.location.state.data.score;
  const category = history.location.state.data.category.replaceAll("_", " ");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

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

  const [leaders, setLeaders] = useState([]);
  useEffect(
    () =>
      fetch("http://localhost:3001/leaders")
        .then((resp) => resp.json())
        .then((data) => setLeaders(data)),
    []
  );
  console.log(leaders);

  // const filteredForScore = leaders.filter((l) => l.score > score);

  // console.log(filteredForScore);
  leaders.sort((b, a) => a.score - b.score);
  // console.log(leaders[0].score);
  return (
   <div className= "results-container">
    <div className="results">
      <h2>Results</h2>
      {leaders[0] && score > leaders[0].score ? (
        <div>
          <img
            className="highscoreimg"
            src="https://media1.giphy.com/media/oKDVEmtRZLQLUoGHq0/200w.gif?cid=82a1493bdclydewjogn0zdimlkud4n3qyg9fi9ylv236hsmp&rid=200w.gif&ct=g"
            alt="highscore1"
          />
          <br></br>
          <img
            className="highscoreimg"
            src="https://y.yarn.co/60af5174-1127-4a7b-8f9f-2204a0705184_text.gif"
            alt="highscore2"
          />
        </div>
      ) : null}
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
    </div>   
  );
}

export default Results;
