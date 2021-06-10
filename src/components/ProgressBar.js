import React from "react";

//mui
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

//style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progressBar: {
    marginBottom: theme.spacing(1),
  },
}));

export default function ProgressBar({ total, finished, ...props }) {
  const classes = useStyles();

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={(100 * finished) / total}
        className={classes.progressBar}
        {...props}
      />
      <Typography variant="body2" color="initial">
        {`已完成${finished}/${total}`}
      </Typography>
    </>
  );
}
