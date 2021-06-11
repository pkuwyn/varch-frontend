import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

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
  paper: {
    width: 900,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  form: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
  verifyButton: {
    backgroundColor: theme.palette.warning.main,
    marginLeft: theme.spacing(2),
  },
  submitButton: {},
}));

//validate form input
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "昵称必须填写";
  } else if (values.name.length > 20) {
    errors.name = "昵称不能超过20个字符长度";
  }

  return errors;
};

export default function AccountInfo({ user }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: user.name,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h5"
        color="primary"
        align="center"
        style={{ fontWeight: 700 }}
      >
        个人信息
      </Typography>

      <Box>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Box display="flex" alignItems="center">
            <TextField
              id="email"
              name="email"
              label="邮箱"
              disabled
              value={user.email}
            />
            {!user.verified ? (
              <Button
                variant="contained"
                className={classes.verifyButton}
                size="small"
                component={RouterLink}
                to="/account/verify/verify"
                style={{
                  flexShrink: 0,
                }}
              >
                验证邮箱
              </Button>
            ) : (
              <Typography
                variant="body1"
                style={{ color: "green", flexShrink: 0 }}
                gutterBottom={false}
              >
                已验证
              </Typography>
            )}
          </Box>

          <TextField
            id="name"
            name="name"
            label="昵称"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            size="small"
            type="submit"
            className={classes.submitButton}
          >
            更新信息
          </Button>
        </form>
      </Box>
    </Paper>
  );
}
