import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link as RouterLink, useRouteMatch } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import logo from "../../assets/logos/logo1.jpg";

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
    width: 64,
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
      >
        <Toolbar disableGutters className={classes.toolbar}>
          {!matchSmDown && (
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
          )}

          <Box mr="auto">
            <RouterLink to="/">
              <Typography variant="h6" color="initial">
                虚拟仿真田野考古
              </Typography>
            </RouterLink>
          </Box>

          {matchSmDown ? (
            <Box order={-1}>
              <MobileMenu></MobileMenu>
            </Box>
          ) : (
            <Box ml={4} mr={4}>
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
