import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//apollo
import { userVar } from "../../gql";
import { useReactiveVar } from "@apollo/client";

//icon
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import FunctionsIcon from "@material-ui/icons/Functions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Box from "@material-ui/core/Box";

//local
import AccountMenuIconButton from "./AccountMenuIconButton";

const useStyles = makeStyles((theme) => ({
  button: {
    letterSpacing: "3px",
  },
  loginButton: {
    // backgroundColor: theme.palette.secondary.light,
    marginRight: "0.5rem",
    paddingTop: 2,
    paddingBottom: 2,
  },
  signupButton: {
    fontWeight: 700,
    paddingTop: 3,
    paddingBottom: 3,
    color: "theme.palette.common.white",
  },
}));

export default function AccountManageButton(props) {
  const { user } = useReactiveVar(userVar);
  const classes = useStyles();
  const theme = useTheme();

  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const matchSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {user ? (
        <AccountMenuIconButton
          user={user}
          iconProps={{
            fontSize: matchSmDown ? "default" : "large",
          }}
        ></AccountMenuIconButton>
      ) : (
        <Box display="flex" alignItems="center">
          <Button
            disableElevation
            variant={matchXsDown ? "contained" : "outlined"}
            color={matchXsDown ? "primary" : "default"}
            className={
              matchXsDown
                ? clsx([classes.signupButton, classes.button])
                : clsx([classes.loginButton, classes.button])
            }
            component={RouterLink}
            to="/account/login"
          >
            登陆
          </Button>

          <Hidden xsDown>
            <Button
              variant="contained"
              disableElevation
              className={clsx([classes.signupButton, classes.button])}
              component={RouterLink}
              color="primary"
              to="/account/signup"
            >
              注册
            </Button>
          </Hidden>
        </Box>
      )}
    </>
  );
}
