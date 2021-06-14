import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

//local
import { VtourIndexPage } from "./vtourIndexPage";
import { VtourDetailPage } from "./VtourDetailPage";

export default function Vtours() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <VtourIndexPage></VtourIndexPage>
      </Route>

      <Route exact path={`${path}/:vtourId`}>
        <VtourDetailPage></VtourDetailPage>
      </Route>

      <Redirect to={url}></Redirect>
    </Switch>
  );
}
