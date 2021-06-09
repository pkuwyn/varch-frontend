import React from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";

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
import VtourCard from "./VtourCard";
//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1rem",
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: theme.typography.h5.fontSize,
    marginRight: "1rem",
  },
  secondActionButton: {
    borderWidth: 2,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

export default function VtourIndexPage(props) {
  const classes = useStyles();

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
    <Box>
      <Container maxWidth="lg" disableGutters>
        {vtours.map((vtour) => (
          <VtourCard key={vtour.id} vtour={vtour}></VtourCard>
        ))}
      </Container>
    </Box>
  ) : null;
}
