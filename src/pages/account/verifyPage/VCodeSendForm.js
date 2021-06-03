import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useReactiveVar } from "@apollo/client";
import { useFormik } from "formik";
import { userVar } from "../../../gql";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

//local
import VCodeSender from "./VCodeSender";
import VerifyEmailForm from "./VerifyEmailForm";
import PasswordResetForm from "./ResetPasswordForm";

//Hooks
import { useSendVCode } from "../../../utils/hooks";
import IconButton from "@material-ui/core/IconButton";

//config
const typeToTitle = {
  reset: "重设密码",
  verify: "验证邮箱",
};
const typeMatch = {
  reset: "RESET",
  verify: "VERIFY",
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: "2rem",
  },
  loginButton: {
    ...theme.mixins.accountManageButton,
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
    color: theme.palette.primary.dark,
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "邮箱必须填写";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "邮箱格式不正确";
  }

  return errors;
};

export default function VCodeSendForm({ type }) {
  const classes = useStyle();
  const { user } = useReactiveVar(userVar);
  const sendVCodeMutation = useSendVCode();
  //发送后设置位disable
  const [disableSend, setDisableSend] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: user ? user.email : "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      sendVCodeMutation({
        variables: { email: values.email, type: typeMatch[type] },
      });
      setDisableSend(true);
    },
  });
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" color="initial" className={classes.title}>
        {typeToTitle[type]}
      </Typography>
      <VCodeSender formik={formik} disableSend={disableSend}></VCodeSender>
      {type === "verify" && (
        <VerifyEmailForm email={formik.values.email}></VerifyEmailForm>
      )}
      {type === "reset" && (
        <PasswordResetForm email={formik.values.email}></PasswordResetForm>
      )}
    </Paper>
  );
}
