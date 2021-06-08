import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//box import for high priority
import Box from "@material-ui/core/Box";

//local
import cert from "../../assets/icons/cert.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: `linear-gradient(to top, #1D2530, ${theme.palette.grey[500]});`,
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    position: "relative",
  },
  img: {
    [theme.breakpoints.down("xs")]: {
      width: "80px",
    },
    "@media (max-width: 400px)": {
      width: "64px",
    },
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
  label: {
    ...theme.mixins.buttonLabelWithArrow,
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
  const theme = useTheme();
  const matchSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      mt={4}
      mx={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 15,
      }}
      pb={4}
    >
      <Container maxWidth="lg" disableGutters>
        <Box>
          <Paper elevation={2} className={classes.paper}>
            <Hidden mdUp>
              <Box position="absolute" top={-20} left={-20}>
                <img src={cert} alt="证书" className={classes.img} />
              </Box>
            </Hidden>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={7} className={classes.text}>
                <Typography
                  variant="h3"
                  color="initial"
                  className={classes.title}
                >
                  立即注册！
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={matchSmDown ? "center" : "flex-start"}
                >
                  <Typography variant="body1" color="initial">
                    注册成为新用户，记录课程学习进度，完成所有课程，获得课程结题证书
                  </Typography>
                  <Hidden smDown>
                    <img src={cert} alt="证书" />
                  </Hidden>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} container justify="space-evenly">
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/account/signup"
                  className={classes.button}
                  classes={{ label: classes.label }}
                >
                  注册
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/account/login"
                  className={classes.button}
                  classes={{ label: classes.label }}
                >
                  登陆
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
