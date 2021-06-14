import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//apollo
import { userVar } from "../../gql";
import { useReactiveVar } from "@apollo/client";

//icon
import clsx from "clsx";

//local
import AccountMenuIconButton from "./AccountMenuIconButton";

import Box from "@material-ui/core/Box";

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
