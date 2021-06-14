import React from "react";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import soilBg from "../../../assets/bg/soil.png";
import { categoryConfig } from "../config";

// import { ProgressBar } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${soilBg})`,
    backgroundRepeat: "repeat",
  },
}));

export default function LearnIntro({ user, course, finished }) {
  const classes = useStyles();
  const {
    id,
    name,
    summary,
    learningTime,

    isMinimal,
    category,
    coverImage,
  } = course;

  const headerText = `基础知识  | ${
    categoryConfig.find(({ type }) => type === course.category).name
  } ${
    isMinimal
      ? `
    |  ${finished ? "已完成" : `预计学习时间${learningTime}分钟`}
    `
      : ""
  }`;
  return (
    <Box
      pt={4}
      pb="200px"
      className={classes.container}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="caption" color="textPrimary">
        {headerText}
      </Typography>

      <Typography
        variant="h3"
        color="primary"
        style={{ fontFamily: "SimSun", fontWeight: 700 }}
        gutterBottom
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        style={{ maxWidth: "80%", width: "960px" }}
      >
        {summary}
      </Typography>
    </Box>
  );
}
