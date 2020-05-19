import React, { Components } from "react";
import logo from "./logo.svg";
// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./components/landing";
import AdultAbuse from "./components/adultAbuse";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Router>
        <Switch>
        <Route path="/questionnaire" exact component={Landing} />
        <Route path="/questionnaire/step2" component={AdultAbuse} />
        </Switch>
      </Router>
      </body>
      <footer>
      </footer>
    </div>
  );
}

export default App;
