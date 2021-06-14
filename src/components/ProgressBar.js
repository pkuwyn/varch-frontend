import React from "react";

//mui
import LinearProgress from "@material-ui/core/LinearProgress";

//style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progressBar: {
    marginBottom: theme.spacing(1),
  },
}));

export default function ProgressBar({
  total,
  finished,
  progressText,
  children,
  ...props
}) {
  const classes = useStyles();

  return (
    <>
      <LinearProgress
        variant="determinate"
        value={(100 * finished) / total}
        className={classes.progressBar}
        {...props}
      />
      {children}
    </>
  );
}
