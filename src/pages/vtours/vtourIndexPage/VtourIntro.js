import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local
import square from "../../../assets/bg/hip-square.png";
import { ProgressBar } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundImage: `linear-gradient(to top, ${theme.palette.primary.dark} 0%,transparent 100%),url(/assets/img/vtours/bg-desktop.jpg)`,
    backgroundImage: `url(${square})`,
    // backgroundSize: "cover",
    // backgroundPosition: "top",
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("sm")]: {
      //   backgroundImage: `linear-gradient(to top, ${theme.palette.primary.dark} 0%,transparent 100%),url(/assets/img/vtours/bg-mobile.jpg)`,
    },
  },
  header: {
    opacity: 1,
    color: theme.palette.common.black,
  },
}));

export default function VtourIntro({ user }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      minHeight="50vh"
      className={classes.container}
      py={2}
      textAlign="center"
    >
      <Typography variant="caption" color="textPrimary">
        考古遗址
      </Typography>

      <Typography
        variant={matchXsDown ? "h4" : "h3"}
        color="primary"
        style={{ fontFamily: "SimSun", fontWeight: 700 }}
        gutterBottom
      >
        虚拟实习
      </Typography>
      <Typography variant="body1" color="initial">
        参与以下虚拟田野考古实习项目，查看考古遗址实景三维模型、全景漫游、交互网站，完成实习课程
      </Typography>
      {user && (
        <Box width="50%" mx="auto" mt={2}>
          <ProgressBar total={5} finished={2}></ProgressBar>
        </Box>
      )}
    </Box>
  );
}
