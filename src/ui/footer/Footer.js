import React from "react";
import { useRouteMatch } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";

//local import
import logo from "../../assets/logos/logo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "32px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const match = useRouteMatch("/account");
  const theme = useTheme();
  const matchSmDown = useMediaQuery(theme.breakpoints.down(400));
  return match ? null : (
    <Box
      minHeight={32}
      bgcolor="grey.300"
      color="common.black"
      display="flex"
      flexDirection={matchSmDown ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      component="footer"
      className={classes.footer}
      py="4px"
    >
      <img
        src={logo}
        alt="logo"
        width="24"
        style={{
          marginRight: 8,
        }}
      />
      <Typography
        variant="body1"
        color="primary"
        align="center"
        gutterBottom={false}
      >
        Copyright©2021
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        align="center"
        gutterBottom={false}
      >
        虚拟仿真田野考古
      </Typography>
    </Box>
  );
}
