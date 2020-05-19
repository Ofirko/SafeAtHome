import React, { Components } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import AdultAbuse from "./components/adultAbuse";
import NextButton from "./components/nextButton";
import FilterQuestion from "./components/filterquestion";
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
=======
        <img src={logo} alt="logo" className="logo" />
>>>>>>> 27f4cfa819d71b04f1a5745edac5f4f5c9840cf7
        <Router>
          <Switch>
            <Route path="/questionnaire" exact component={Landing} />
            <Route path="/questionnaire/step1" component={FilterQuestion} />
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
<<<<<<< HEAD
          </Switch>
        </Router>
        <img src={logo} alt="logo" className="logo" />
        <Router>
          <Switch>
            <Route path="/questionnaire" exact component={Landing} />
            <Route path="/questionnaire/step2" component={AdultAbuse} />
          </Switch>
        </Router>
=======
        </Switch>
      </Router>
>>>>>>> 27f4cfa819d71b04f1a5745edac5f4f5c9840cf7
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
