import React from "react";

function Question({ q, handleAnswerClick }) {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      --currentIndex;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const answers = [...q.incorrectAnswers, q.correctAnswer];
  console.log(shuffle(answers));
 const mappedAs = shuffle(answers).map((a) => <button className="answers-buttons" onClick={()=>handleAnswerClick(a)} key={a}>{a}</button>);
  return (
    <div>
      <h4>{q.question}</h4>
      {mappedAs}
    </div>
  );
}

export default Question;
