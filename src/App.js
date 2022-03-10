import React, { useState } from "react";
import Header from "./Header";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import Results from "./Results";

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

function App() {
  const [questions, setQuestions] = useState([]);
  console.log(questions);

  const quizzes = categories.map((category) => (
    <Route path={`/quiz/${category}`} key={category}>
      <Quiz questions={questions} category={category} key={category} />
    </Route>
  ));

  return (
    <div className="App">
      <Header setQuestions={setQuestions} />
      <Switch>
        {quizzes}
        <Route exact path="/">
          <QuizList categories={categories} setQuestions={setQuestions} />
        </Route>
        <Route path="/leaders">
          <LeaderBoard />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
