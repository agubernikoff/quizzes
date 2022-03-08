import React from "react";
import Header from "./Header";
import QuizList from "./QuizList";
import Quiz from "./Quiz";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";

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
  const mappedcategories = categories.map((c) => (
    <Route path={`/quiz/${c}`}>
      <Quiz c={c} />
    </Route>
  ));

  return (
    <div className="App">
      <Header />
      <Switch>
        {mappedcategories}
        <Route exact path="/">
          <QuizList categories={categories} />
        </Route>
        <Route path="/leaders">
          <LeaderBoard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
