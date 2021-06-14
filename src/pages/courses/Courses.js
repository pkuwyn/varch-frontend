import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

//import sub pages
import { CoursesIndexPage } from "./coursesIndexPage";
import { CategoryPage } from "./categoryPage";
import { LearnPage } from "./learnPage";

export default function Courses() {
  const { path } = useRouteMatch();
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
