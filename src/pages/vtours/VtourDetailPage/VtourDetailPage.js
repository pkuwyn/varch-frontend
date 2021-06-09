import React from "react";
import { Link as RouterLink, useParams, Redirect } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local
import { useVtourById } from "../../../utils/hooks";

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

export default function VtourDetailPage(props) {
  const classes = useStyles();
  const { vtourId } = useParams();
  let vtour;
  const { loading, error, data } = useVtourById(vtourId);

  if (data) {
    vtour = data.Vtour;

    //dev
    console.log(vtour);
  }
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  if (error) {
    console.log(error);
    return <Redirect to="/vtours"></Redirect>;
  }
  return vtour ? (
    <Box>
      VtourId : {vtourId}
      {JSON.stringify(vtour)}
    </Box>
  ) : null;
}
