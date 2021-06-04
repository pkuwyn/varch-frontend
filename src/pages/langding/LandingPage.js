import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";

//local
import HeroBlock from "./HeroBlock";
import RegisterBlock from "./RegisterBlock";

const useStyles = makeStyles((theme) => ({
  pig: {
    border: ` ${theme.color} 3px solid`,
    "&:hover": {
      color: "blue",
    },
  },
  ".pig:hover": {
    color: "red",
  },
  hov: {
    border: "yellow 2px solid",
  },
}));

export default function LandingPage(props) {
  const theme = useTheme();
  return (
    <>
      <HeroBlock></HeroBlock>
      <Box
        mx={{
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10,
        }}
        pb={4}
      >
        <RegisterBlock></RegisterBlock>
      </Box>
    </>
  );
}
