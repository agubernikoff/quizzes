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

  const mappedcategories = categories.map((c) => (
    <Route path={`/quiz/${c}`} key={c}>
      <Quiz questions={questions} c={c} key={c} />
    </Route>
  ));

  return (
    <div className="App">
      <Header />
      <Switch>
        {mappedcategories}
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
