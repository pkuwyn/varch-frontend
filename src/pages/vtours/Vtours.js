import React from "react";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

//import sub pages
import { VtourIndexPage } from "./vtourIndexPage";
import { VtourDetailPage } from "./VtourDetailPage";

const links = ["learn?vtourId=xxx&name=ooo"];

export default function Vtours() {
  const { path, url } = useRouteMatch();
  return (
    <>
      {/* dev only */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to={`${url}/60bf69d5b3ba7720606a5ca1`}>Single Tour</Link>
      </div>

      <Switch>
        <Route exact path={path}>
          <VtourIndexPage></VtourIndexPage>
        </Route>

        <Route exact path={`${path}/:vtourId`}>
          <VtourDetailPage></VtourDetailPage>
        </Route>

        <Redirect to={url}></Redirect>
      </Switch>
    </>
  );
}
