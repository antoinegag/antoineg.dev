import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
