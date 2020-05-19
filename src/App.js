import React, { Components } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import AdultAbuse from "./components/adultAbuse";
import NextButton from "./components/nextButton";

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
>>>>>>> 63b9e94b2f443ab4682421b6cb656fb64ba85431
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
