import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import CheckIcon from "@material-ui/icons/Check";
// utils
import clsx from "clsx";

// local
import CongratulationAnimation from "./CongratulationAnimation";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  questionContainer: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
  form: {
    width: "100%",
  },
  formGroupRoot: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(1),
    },
  },
  answer: {
    marginBottom: 0,
    wordBreak: "break-all",
  },
  questionImage: {
    width: "80%",
    margin: "auto",
    display: "block",
  },
}));

export default function Question({ question, boxProps, handleUpdate }) {
  const classes = useStyles();
  const { content, questionImage, answer, explanation } = question;

  //state for finishedAnswer
  const [answerCorrect, setAnswerCorrect] = React.useState(false);
  const [radioDisabled, setRadioDisabled] = React.useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  const setDisableForWrongAnswer = (value) => {
    setRadioDisabled((radioDisabled) => ({ ...radioDisabled, [value]: true }));
  };

  //state for RadioGroup
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    const userAnswer = event.target.value;
    if (userAnswer === answer) {
      setAnswerCorrect(true);
      handleUpdate();
    } else {
      setDisableForWrongAnswer(userAnswer);
    }
    setValue(userAnswer);
  };

  return (
    <Box
      {...boxProps}
      bgcolor="#e3f2fd"
      p={[2, 4, 6]}
      borderRadius={4}
      boxShadow={1}
      className={classes.questionContainer}
    >
      {questionImage && (
        <img
          src={`${process.env.REACT_APP_MEDIA_URI}${questionImage.publicUrl}`}
          alt="测试题干图"
          className={classes.questionImage}
        />
      )}
      {answerCorrect && <CongratulationAnimation></CongratulationAnimation>}
      <FormControl component="fieldset" className={classes.form}>
        <Typography variant="h6" color="initial">
          {content}
        </Typography>

        {answerCorrect && (
          <Typography variant="body2" color="error">
            答案解析: {explanation}
          </Typography>
        )}

        <RadioGroup
          aria-label="questions"
          name="questions"
          value={value}
          onChange={handleChange}
          classes={{ root: classes.formGroupRoot }}
          disabled={answerCorrect}
        >
          {["a", "b", "c", "d"].map((label) => (
            <Box key={label} display="flex" alignItems="center">
              <FormControlLabel
                value={label}
                control={<Radio />}
                label={question[label]}
                disabled={answerCorrect || radioDisabled[label]}
                classes={{ label: classes.answer }}
              />
              {answerCorrect && label === answer && (
                <CheckIcon style={{ color: "green" }}></CheckIcon>
              )}
            </Box>
          ))}
        </RadioGroup>
      </FormControl>

      {/* <p>{JSON.stringify(question)}</p> */}
    </Box>
  );
}
