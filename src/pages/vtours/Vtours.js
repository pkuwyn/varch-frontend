import React from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local

//box import for high priority
import Box from "@material-ui/core/Box";

//import sub pages
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
