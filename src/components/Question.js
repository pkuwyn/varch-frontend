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

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  questionImage: {
    width: "80%",
    margin: "auto",
    display: "block",
  },
}));

export default function Question({ question, boxProps }) {
  const classes = useStyles();

  const { content, questionImage } = question;

  console.log(question);
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      {...boxProps}
      bgcolor="#e1f5fe"
      p={[1, 2, 4]}
      borderRadius={4}
      boxShadow={1}
    >
      {questionImage && (
        <img
          src={`${process.env.REACT_APP_MEDIA_URI}${questionImage.publicUrl}`}
          alt="测试题干图"
          className={classes.questionImage}
        />
      )}

      <Typography variant="h6" color="initial">
        {content}
      </Typography>
      {/* <p>{JSON.stringify(question)}</p> */}
    </Box>
  );
}
