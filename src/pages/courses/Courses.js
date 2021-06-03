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

const links = ["category", "learn", "search", "test"];

export default function Courses() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Link to={url}>
        <h2>Coruses</h2>
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
      <hr />
      <Switch>
        <Route exact path={path}>
          <CoursesIndexPage></CoursesIndexPage>
        </Route>

        <Route path={`${path}/category`}>
          <CategoryPage></CategoryPage>
        </Route>
        <Route path={`${path}/learn`}>
          <LearnPage></LearnPage>
        </Route>
        <Route path={`${path}/search`}>
          <SearchPage></SearchPage>
        </Route>
        <Route path={`${path}/test`}>
          <TestPage></TestPage>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}
