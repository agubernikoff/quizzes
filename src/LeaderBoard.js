import React, { useState, useEffect } from "react";

function LeaderBoard() {
  const [leaders, setLeaders] = useState([]);
  useEffect(
    () =>
      fetch("http://localhost:3001/leaders")
        .then((resp) => resp.json())
        .then((data) => setLeaders(data)),
    []
  );
  console.log(leaders);
  const leadersFR = leaders.sort((b, a) => a.score - b.score).slice(0, 10);
  const mappedLeaders = leadersFR.map((leader) => (
    <tr key={leader.id}>
      <td>{leader.name}</td>
      <td>{leader.score}</td>
      <td>{leader.category}</td>
    </tr>
  ));
  return (
    <div className="tableDiv">
      <h1>LeaderBoard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{mappedLeaders}</tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
