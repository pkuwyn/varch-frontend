import React from "react";

import Grid from "@material-ui/core/Grid";

import Fade from "@material-ui/core/Fade";

//SignUP Page Layout import
import { FullPageLayoutBox } from "../components";
import SignUpAnimation from "./SignUpAnimation";
import SignUpForm from "./SignUpForm";
export default function SignUpPage(props) {
  return (
    <FullPageLayoutBox minHeight={800} pt={16}>
      <Fade in timeout={1000}>
        <Grid container>
          <Grid item xs={12}>
            <SignUpAnimation></SignUpAnimation>
          </Grid>
          <Grid item xs={12}>
            <SignUpForm></SignUpForm>
          </Grid>
        </Grid>
      </Fade>
    </FullPageLayoutBox>
  );
}
