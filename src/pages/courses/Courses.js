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
import { CoursesIndexPage } from "./coursesIndexPage";
import { CategoryPage } from "./categoryPage";
import { LearnPage } from "./learnPage";
import { SearchPage } from "./searchPage";
import { TestPage } from "./testPage";

const links = ["basic", "tools", "ymy", "learn"];

export default function Courses() {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <CoursesIndexPage></CoursesIndexPage>
      </Route>

      <Route exact path={`${path}/:category(basic|tools|ymy)`}>
        <CategoryPage></CategoryPage>
      </Route>

      <Route path={`${path}/learn/:id`}>
        <LearnPage></LearnPage>
      </Route>

      <Redirect to="/"></Redirect>
    </Switch>
  );
}
