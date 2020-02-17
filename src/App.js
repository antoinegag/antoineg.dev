import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
