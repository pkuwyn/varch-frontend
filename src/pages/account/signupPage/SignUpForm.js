import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import Paper from "@material-ui/core/Paper";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { useSignUp } from "../../../utils/hooks";

//validate form input
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "邮箱必须填写";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "邮箱格式不正确";
  }
  if (!values.password) {
    errors.password = "密码必须填写";
  } else if (values.password.length < 8) {
    errors.password = "密码须不少于8位";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "请再次确认密码";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "确认密码与输入密码不同，请再次确认";
  }
  return errors;
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: "2rem",
  },
  loginButton: {
    ...theme.mixins.accountManageButton,
  },
}));
export default function LoginForm() {
  const classes = useStyle();
  const signupMutation = useSignUp("/account/verify/verify");

  const formik = useFormik({
    initialValues: {
      //dev
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validate,
    onSubmit: (values) => {
      signupMutation({ variables: values });
    },
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={1}
      mx="auto"
      alignItems="center"
      maxWidth={500}
      css={{
        "& .MuiTextField-root": {
          marginBottom: 32,
        },
      }}
      clone
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper className={classes.paper}>
          <TextField
            id="email"
            name="email"
            fullWidth
            label="邮箱"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            id="password"
            name="password"
            fullWidth
            label="密码"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            id="passwordConfirm"
            name="passwordConfirm"
            fullWidth
            label="确认密码"
            variant="outlined"
            type="password"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            className={classes.loginButton}
          >
            注册
          </Button>
        </Paper>
      </form>
    </Box>
  );
}
