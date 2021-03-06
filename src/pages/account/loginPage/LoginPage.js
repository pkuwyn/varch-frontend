import React from "react";
import Grid from "@material-ui/core/Grid";

import LoginForm from "./LoginForm";
import Fade from "@material-ui/core/Fade";

//LoginPage Layout import
import { FullPageLayoutBox } from "../components";
import LoginAnimation from "./LoginAnimation";
// import AccountStatus from "./AccountStatus";

export default function LoginPage(props) {
  return (
    <FullPageLayoutBox pt={12}>
      <Fade in timeout={1000}>
        <Grid container>
          <Grid item xs={12}>
            <LoginAnimation></LoginAnimation>
          </Grid>
          <Grid item xs={12}>
            <LoginForm></LoginForm>
          </Grid>
        </Grid>
      </Fade>

      {/* dev only */}
      {/* <AccountStatus></AccountStatus> */}
    </FullPageLayoutBox>
  );
}
