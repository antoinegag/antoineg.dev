import React from "react";
import PostList from "../../components/PostList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Project from "./Project";

export default function Projects() {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Projects</h1>
      <Switch>
        <Route path={`${match.path}/:project`}>
          <Project />
        </Route>
        <Route path={match.path}>
          <PostList />
        </Route>
      </Switch>
    </div>
  );
}
