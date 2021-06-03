import React from "react";
import { useRouteMatch } from "react-router-dom";
import Fade from "@material-ui/core/Fade";

import VCodeSendForm from "./VCodeSendForm";
import { FullPageLayoutBox } from "../components";
import Box from "@material-ui/core/Box";

export default function VerifyPage(props) {
  const match = useRouteMatch();
  const type = match.params.type;
  return (
    <FullPageLayoutBox pt={12}>
      <Fade in timeout={1000}>
        <Box width={1} maxWidth={500}>
          <VCodeSendForm type={type}></VCodeSendForm>
        </Box>
      </Fade>
    </FullPageLayoutBox>
  );
}
