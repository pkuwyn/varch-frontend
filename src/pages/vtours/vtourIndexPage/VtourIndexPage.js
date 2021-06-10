import React from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local
import { useAllVtours } from "../../../utils/hooks";
import { userVar } from "../../../gql";
import VtourIntro from "./VtourIntro";
import VtourCard from "./VtourCard";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    transform: "translateY(-15vh)",
  },
}));

export default function VtourIndexPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);
  const vtourFinished = (id) =>
    user
      ? user.vtoursFinished.map((vtour) => vtour.id).indexOf(id) !== -1
      : false;
  console.log(user);
  let vtours;
  const { data, error } = useAllVtours();
  if (data) {
    vtours = data.allVtours;
  }
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  if (error) {
    console.log(error);
    return <Redirect to="/vtours"></Redirect>;
  }

  return vtours ? (
    <Box css={{ userSelect: "none" }}>
      <VtourIntro user={user}></VtourIntro>
      <Container maxWidth="lg" disableGutters className={classes.cardContainer}>
        {vtours.map((vtour) => (
          <VtourCard
            key={vtour.id}
            vtour={vtour}
            finished={vtourFinished(vtour.id)}
          ></VtourCard>
        ))}
      </Container>
    </Box>
  ) : null;
}
