import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import { useResetPassword } from "../../../utils/hooks";

//validate form input
const validate = (values) => {
  const errors = {};
  if (!values.vCode) {
    errors.vCode = "请输入验证码";
  }
  if (!values.newPassword) {
    errors.newPassword = "新密码必须填写";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "新密码必须不少于8位";
  }
  return errors;
};

const useStyle = makeStyles((theme) => ({
  loginButton: {
    ...theme.mixins.accountManageButton,
  },
}));

export default function ResetPasswordForm({ email }) {
  const classes = useStyle();
  const resetPasswordMutation = useResetPassword("/");
  const formik = useFormik({
    initialValues: {
      vCode: "",
      newPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      resetPasswordMutation({ variables: { email, ...values } });
    },
  });

  return (
    <Box
      clone
      mt="32px"
      css={{
        "& .MuiTextField-root": {
          marginBottom: 32,
        },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="vCode"
          fullWidth
          label="验证码"
          variant="outlined"
          value={formik.values.vCode}
          onChange={formik.handleChange}
          error={formik.touched.vCode && Boolean(formik.errors.vCode)}
          helperText={formik.touched.vCode && formik.errors.vCode}
        />
        <TextField
          name="newPassword"
          fullWidth
          label="新密码"
          variant="outlined"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          className={classes.loginButton}
        >
          修改密码
        </Button>
      </form>
    </Box>
  );
}
