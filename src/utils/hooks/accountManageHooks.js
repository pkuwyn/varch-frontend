import React from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import client, {
  userVar,
  LOGOUT,
  LOGIN,
  CURRENT_USER,
  SIGNUP,
  SEND_VERIFY_CODE,
  VERIFY_EMAIL,
  RESET_PASSWORD,
} from "../../gql";
import { useHistory } from "react-router-dom";

export function useLogout(redirectUrl) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [logoutMutation] = useMutation(LOGOUT, {
    onCompleted: (data) => {
      userVar({ user: null });
      enqueueSnackbar("成功退出登录", {
        variant: "success",
        key: "logout-success",
      });
      if (redirectUrl) {
        history.push(redirectUrl);
      }
    },
    onError: (error) => {
      enqueueSnackbar("退出登录失败", {
        variant: "error",
        key: "logout-fail",
      });
    },
  });
  return logoutMutation;
}

export function useLogin(redirectUrl) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (data) => {
      userVar({ user: data.authenticateUserWithPassword.item });
      enqueueSnackbar(
        `${data.authenticateUserWithPassword.item.email} 登陆成功`,
        {
          variant: "success",
          key: "login-success",
        }
      );
      if (redirectUrl) {
        history.push(redirectUrl);
      }
    },
    onError: (error) => {
      enqueueSnackbar("登陆失败，邮箱或密码不正确", {
        variant: "error",
        key: "login-fail",
      });
    },
  });

  return loginMutation;
}

export function useRemoteUser() {
  React.useEffect(() => {
    client
      .query({
        query: CURRENT_USER,
      })
      .then((result) => {
        userVar({ user: result.data.authenticatedUser });
      });
  }, []);

  return null;
}

export function useSignUp(redirectUrl) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [signupMutation] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      console.log(data);
      enqueueSnackbar(`${data.createUser.email} 注册成功`, {
        variant: "success",
        key: "signup-success",
      });
      if (redirectUrl) {
        history.push(redirectUrl);
      }
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("注册失败,该邮箱已注册", {
        variant: "error",
        key: "signup-fail",
      });
    },
  });

  return signupMutation;
}

export function useSendVCode() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [sendVCodeMutation] = useMutation(SEND_VERIFY_CODE, {
    onCompleted: (data) => {
      enqueueSnackbar("验证码发送成功", {
        variant: "success",
        key: "vcode-send-success",
      });
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("验证码发送失败", {
        variant: "error",
        key: "vcode-send-fail",
      });
    },
  });

  return sendVCodeMutation;
}

export function useVerifyEmail(redirectUrl) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [verifyEmailMutation] = useMutation(VERIFY_EMAIL, {
    onCompleted: (data) => {
      console.log(data);
      if (data.verifyEmail.success) {
        enqueueSnackbar("邮箱验证成功", {
          variant: "success",
          key: "email-verify-success",
        });
        if (redirectUrl) {
          history.push(redirectUrl);
        }
      } else {
        enqueueSnackbar("邮箱验证失败，验证码错误", {
          variant: "error",
          key: "email-verify-failed",
        });
      }
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("邮箱验证失败", {
        variant: "error",
        key: "email-verify-failed-2",
      });
    },
  });

  return verifyEmailMutation;
}

export function useResetPassword(redirectUrl) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [resetPasswordMutation] = useMutation(RESET_PASSWORD, {
    onCompleted: (data) => {
      console.log(data);

      if (data.resetPassword.success) {
        enqueueSnackbar("密码修改成功", {
          variant: "success",
          key: "password-reset-success",
        });
        if (redirectUrl) {
          history.push(redirectUrl);
        }
      } else {
        enqueueSnackbar("密码修改失败，验证码错误", {
          variant: "error",
          key: "password-reset-failed",
        });
      }
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar("密码修改失败", {
        variant: "error",
        key: "password-reset-failed-2",
      });
    },
  });

  return resetPasswordMutation;
}
