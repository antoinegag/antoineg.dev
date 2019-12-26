import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Home() {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Home</h1>
      <Switch>
        <Route path={match.path}>
          <h1>Welcome!</h1>
        </Route>
      </Switch>
    </div>
  );
}
