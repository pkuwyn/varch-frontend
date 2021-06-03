import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {
  Link as RouterLink,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";

export default function LoginHelper(props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width={1}
      alignItems="center"
      mt={1}
      color="secondary.dark"
    >
      <Link
        to="./signup"
        component={RouterLink}
        underline="none"
        color="inherit"
      >
        注册
      </Link>

      <Link
        to="./verify/reset"
        component={RouterLink}
        underline="none"
        color="inherit"
      >
        忘记密码
      </Link>
    </Box>
  );
}
