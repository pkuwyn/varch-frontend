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
import { LearnPage } from "./learnPage";

const links = ["learn?vtourId=xxx&name=ooo"];

export default function Vtours() {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Link to={url}>
        <h2>Vtours</h2>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {links.map((path) => (
          <Link to={`${url}/${path}`} key={path}>
            {path}
          </Link>
        ))}
      </div>

      <Switch>
        <Route exact path={path}>
          <VtourIndexPage></VtourIndexPage>
        </Route>

        <Route path={`${path}/learn`}>
          <LearnPage></LearnPage>
        </Route>

        <Redirect to={url}></Redirect>
      </Switch>
    </>
  );
}
