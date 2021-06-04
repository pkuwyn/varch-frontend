import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { userVar } from "../../gql";
import { useReactiveVar } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: `linear-gradient(to top, #1D2530, ${theme.palette.grey[500]});`,
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  title: {
    fontWeight: 900,
    fontFamily: "SimSun",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  button: {
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: "1.25rem",
    color: theme.palette.common.white,
    minWidth: 100,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
  },
  text: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
}));
export default function RegisterBlock(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);
  return (
    <>
      {user ? null : (
        <Box {...props}>
          <Paper elevation={2} className={classes.paper}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6} className={classes.text}>
                <Typography
                  variant="h3"
                  color="initial"
                  className={classes.title}
                >
                  立即注册！
                </Typography>
                <Typography variant="body1" color="initial">
                  注册成为新用户，记录课程学习进度，完成所有课程，获得课程结题证书
                </Typography>
              </Grid>

              <Grid item xs={12} md={6} container justify="space-evenly">
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/account/signup"
                  className={classes.button}
                >
                  注册
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/account/login"
                  className={classes.button}
                >
                  登陆
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </>
  );
}
