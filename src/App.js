import React, { Components } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import AdultAbuse from "./components/adultAbuse";
import Result from "./components/result";
import DecideReport from "./components/decideReport";
import AfterReport from "./components/afterReport";
import AnswerFromSystem from "./components/answerFromSystem";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
<<<<<<< HEAD
        <Router>
          <Switch>
            <Route path="/questionnaire" exact component={Landing} />
            <Route path="/questionnaire/step2" component={AdultAbuse} />
            <Route path="/questionnaire/end-questionnaire" component={Result} />
            <Route
              path="/questionnaire/report-welfare"
              component={DecideReport}
            />
            <Route
              path="/questionnaire/thanks-for-report"
              component={AfterReport}
            />
            <Route path="/questionnaire/answer" component={AnswerFromSystem} />
          </Switch>
        </Router>
=======
        <img src={logo} alt="logo" className="logo" />
      <Router>
        <Switch>
        <Route path="/questionnaire" exact component={Landing} />
        <Route path="/questionnaire/step2" component={AdultAbuse} />
        </Switch>
      </Router>
>>>>>>> 7b10c0a5998b9380f23f02c9a09884c6fccd035e
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
