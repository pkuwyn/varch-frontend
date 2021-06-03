import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    "& > *": {
      marginBottom: "2rem",
    },
  },
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
        px={{
          xs: 5,
          md: 15,
        }}
        height={1000}
        display="flex"
        flexDirection="column"
        alignItems={matchXsDown ? "center" : "flex-start"}
        className={classes.container}
      >
        <Typography variant="h3" color="initial">
          虚拟仿真田野考古
        </Typography>
        <Typography
          variant="subtitle"
          color="initial"
          style={{
            maxWidth: 500,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, vitae.
          Excepturi impedit at quis numquam deserunt ratione vero consectetur
          rerum sit vel, libero, error ipsam. Saepe blanditiis minima temporibus
          porro.
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
