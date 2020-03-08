import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./styles/App.css";
import { Hello } from "./pages/Hello";

function App() {
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/hello">
            <Hello />
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
