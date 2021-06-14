import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import { useVerifyEmail } from "../../../utils/hooks";

//validate form input
const validate = (values) => {
  const errors = {};
  if (!values.vCode) {
    errors.vCode = "请输入验证码";
  }

  return errors;
};

const useStyle = makeStyles((theme) => ({
  loginButton: {
    ...theme.mixins.accountManageButton,
  },
}));

export default function VerifyEmailForm({ email }) {
  const classes = useStyle();
  const verifyEmailMutation = useVerifyEmail("/");
  const formik = useFormik({
    initialValues: {
      vCode: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      verifyEmailMutation({ variables: { email, vCode: values.vCode } });
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

        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          className={classes.loginButton}
        >
          验证
        </Button>
      </form>
    </Box>
  );
}
