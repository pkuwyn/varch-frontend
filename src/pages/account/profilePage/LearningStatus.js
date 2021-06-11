import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import LockIcon from "@material-ui/icons/Lock";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// utils

// local
import { ProgressBar } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 900,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    ...theme.mixins.childrenMargin,
  },
  certButton: {
    backgroundColor: theme.palette.success.main,
    alignSelf: "center",
  },
}));

const useButtonStyles = makeStyles((theme) => ({
  button: {
    width: 80,
    textAlign: "center",
    flexShrink: 0,
  },
}));

const progressProps = {
  color: "secondary",
};

const FinishedIcon = () => {
  return (
    <CheckCircleOutlineIcon style={{ color: "green" }}></CheckCircleOutlineIcon>
  );
};

const ContinueButton = ({ to }) => {
  const classes = useButtonStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      component={RouterLink}
      to={to}
      size="small"
      className={classes.button}
    >
      继续学习
    </Button>
  );
};
export default function LearningStatus({
  totalCourses,
  totalVtours,
  coursesFinished,
  vtoursFinished,
  unityFinished,
}) {
  const classes = useStyles();
  const coursesDone = totalCourses === coursesFinished;
  const vtoursDone = totalVtours === vtoursFinished;
  const finishAll = coursesDone && vtoursDone && unityFinished;

  const [showCert, setShowCert] = React.useState(false);

  return (
    <>
      <Paper className={classes.paper}>
        <Typography
          variant="h5"
          color="primary"
          align="center"
          style={{ fontWeight: 700 }}
        >
          学习进度
        </Typography>
        <Box>
          <ProgressBar
            total={totalCourses}
            finished={coursesFinished}
            {...progressProps}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" color="initial">
                {`基础知识课程完成度: ${coursesFinished} / ${totalCourses}`}
              </Typography>

              {coursesDone ? (
                <FinishedIcon></FinishedIcon>
              ) : (
                <ContinueButton to="/courses"></ContinueButton>
              )}
            </Box>
          </ProgressBar>
        </Box>

        <Box>
          <ProgressBar
            total={totalVtours}
            finished={vtoursFinished}
            {...progressProps}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" color="initial">
                {`虚拟实习课程完成度: ${vtoursFinished} / ${totalVtours}`}
              </Typography>

              {vtoursDone ? (
                <FinishedIcon></FinishedIcon>
              ) : (
                <ContinueButton to="/vtours"></ContinueButton>
              )}
            </Box>
          </ProgressBar>
        </Box>
        <Box>
          <ProgressBar
            total={unityFinished ? 1 : 0}
            finished={1}
            {...progressProps}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" color="initial">
                {`虚拟发掘完成度:${unityFinished ? "已完成" : "未完成"}`}
              </Typography>

              {unityFinished ? (
                <FinishedIcon></FinishedIcon>
              ) : (
                <ContinueButton to="/virtual-excavation"></ContinueButton>
              )}
            </Box>
          </ProgressBar>
        </Box>

        <Button
          onClick={() => {
            setShowCert(true);
          }}
          variant="contained"
          className={classes.certButton}
          disabled={!finishAll}
          startIcon={
            finishAll ? (
              <VerifiedUserIcon></VerifiedUserIcon>
            ) : (
              <LockIcon></LockIcon>
            )
          }
        >
          {finishAll ? "查看证书" : "完成课程解锁证书"}
        </Button>
      </Paper>

      <Grow in={showCert} timeout={3000} style={{ transformOrigin: "top" }}>
        <Box
          width={900}
          mb={4}
          maxWidth="100%"
          borderRadius={20}
          overflow="hidden"
        >
          <img src="/cert.png" alt="证书" width="100%" />
        </Box>
      </Grow>
    </>
  );
}
