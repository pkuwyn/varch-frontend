import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// utils
import clsx from "clsx";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@keyframes slideIn": {
    from: {
      transform: "translateY(-100vh)",
    },
    to: {
      transform: "translateY(0)",
    },
  },
  boxContainer: {
    animation: `$slideIn 0.5s ease-in-out  forwards `,
  },
  mainActionButton: {
    marginTop: "1rem",
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: theme.typography.h6.fontSize,
    marginRight: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
      letterSpacing: "2px",
      fontSize: "1rem",
    },
  },
  secondActionButton: {
    borderWidth: 2,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export default function HeroBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      minHeight={500}
      height="95vh"
      className={classes.boxContainer}
      css={{
        backgroundImage: `linear-gradient(${
          matchesSmDown ? "to bottom" : " to right"
        }, rgba(255,255,255,1) 0%,transparent 100%),url(/assets/img/landing/dbnj.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      component="section"
    >
      <Box
        pt="20vh"
        mx={{
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10,
          xl: 15,
        }}
        display="flex"
        flexDirection="column"
        alignItems={matchesSmDown ? "center" : "flex-start"}
      >
        <Typography
          variant="h4"
          style={{
            fontWeight: 900,
          }}
        >
          虚拟仿真
        </Typography>
        <Typography
          variant="h1"
          color="primary"
          style={{
            fontWeight: 700,
            fontFamily: "SimSun",
            position: "relative",

            left: matchesSmDown ? 0 : -10,
          }}
        >
          田野考古
        </Typography>
        <Typography
          variant="body1"
          style={{
            maxWidth: 500,
          }}
          paragraph
          align={matchesSmDown ? "center" : "left"}
        >
          本网站以虚拟仿真的模式提供田野考古知识教学，您可以学习田野考古基础理论知识，进行在线田野考古遗址参观实习，拟参与澹泊宁静考古遗址的虚拟发掘，掌握田野考古知识
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className={classes.mainActionButton}
            component={RouterLink}
            to="/courses"
            startIcon={<SchoolIcon></SchoolIcon>}
          >
            开始学习
          </Button>

          <Button
            variant="outlined"
            color="primary"
            className={clsx(
              classes.mainActionButton,
              classes.secondActionButton
            )}
            component={RouterLink}
            to="/virtual-excavation"
            endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
          >
            虚拟发掘
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
