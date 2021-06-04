import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {},
  mainActionButton: {
    fontWeight: 700,
    letterSpacing: "4px",
  },
}));

export default function HeroBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box
      css={{
        backgroundImage: `url(/assets/img/landing-background.png)`,
        backgroundSize: "contain",
        backgroundPosition: `top right`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        pt={{
          xs: "100px",
          md: "200px",
        }}
        mx={{
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10,
        }}
        height={1000}
        display="flex"
        flexDirection="column"
        alignItems={matchXsDown ? "center" : "flex-start"}
      >
        <Typography
          variant="h6"
          color="initial"
          style={{
            fontWeight: 900,
            position: "relative",
            left: 5,
          }}
        >
          虚拟仿真
        </Typography>
        <Typography
          variant="h3"
          color="initial"
          style={{
            fontWeight: "bold",
            fontFamily: "SimSun",
          }}
        >
          田野考古教学
        </Typography>
        <Typography
          variant="subtitle"
          color="initial"
          style={{
            maxWidth: 500,
          }}
          paragraph
        >
          学习田野考古理论知识，虚拟参观田野考古遗址，完成一次虚拟的建筑考古发掘
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.mainActionButton}
          component={RouterLink}
          to="/courses"
        >
          开始学习
        </Button>
      </Box>
    </Box>
  );
}
