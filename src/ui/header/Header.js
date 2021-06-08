import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import logo from "../../assets/logos/logo2.png";

//local
import ElevationScroll from "../../utils/ElevationScroll";
import DesktopTab from "./DesktopTab";
import MobileMenu from "./MobileMenu";
import AccountManageButton from "./AccountManageButton";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  buttonRoot: {
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  logo: {
    width: 48,
    [theme.breakpoints.up("lg")]: {
      width: 64,
    },
    [theme.breakpoints.up("xl")]: {
      width: 72,
    },
  },
}));

export default function Header(props) {
  const classes = useStyle();

  // account/* 页面上使用Static Appbar
  const matchAccountRoute = useRouteMatch("/account/*");

  const theme = useTheme();

  const matchSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ElevationScroll elevationValue={8} elevationValueBefore={1}>
      <AppBar
        color="default"
        position={matchAccountRoute ? "static" : "sticky"}
        component="header"
      >
        <Toolbar disableGutters className={classes.toolbar}>
          <Box flexGrow={matchSmDown ? 1 : 0}>
            <Button
              component={RouterLink}
              to="/"
              disableRipple
              disableElevation
              classes={{
                root: classes.buttonRoot,
              }}
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
          </Box>
          <Hidden smDown>
            <Box mr="auto">
              <RouterLink to="/">
                <Typography variant="h6" color="initial">
                  虚拟仿真田野考古
                </Typography>
              </RouterLink>
            </Box>
          </Hidden>

          {matchSmDown ? (
            <Box order={-1}>
              <MobileMenu></MobileMenu>
            </Box>
          ) : (
            <Box ml={4} mr={2}>
              <DesktopTab></DesktopTab>
            </Box>
          )}

          <Box>
            <AccountManageButton></AccountManageButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
