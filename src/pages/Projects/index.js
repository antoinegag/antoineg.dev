import React from "react";
import PostList from "../../components/PostList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Project from "./Project";

import { Container } from "reactstrap";

export default function Projects() {
  const match = useRouteMatch();

  return (
    <Container fluid className="p-4">
      <h1>My Projects</h1>
      <Switch>
        <Route path={`${match.path}/:project`}>
          <Project />
        </Route>
        <Route path={match.path}>
          <PostList />
        </Route>
      </Switch>
    </Container>
  );
}
