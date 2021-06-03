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
import { LoginPage } from "./loginPage";
import { ProfilePage } from "./profilePage";
import { SignUpPage } from "./signupPage";
import { VerifyPage } from "./verifyPage";

export default function Account() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <ProfilePage></ProfilePage>
        </Route>

        <Route path={`${path}/login`}>
          <LoginPage></LoginPage>
        </Route>

        <Route path={`${path}/signup`}>
          <SignUpPage></SignUpPage>
        </Route>

        <Route path={`${path}/verify/:type(reset|verify)`}>
          <VerifyPage></VerifyPage>
        </Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}
