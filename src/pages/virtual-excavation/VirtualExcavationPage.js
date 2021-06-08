import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
import UnityLoader from "./UnityLoader";
//box import for high priority
import Box from "@material-ui/core/Box";

export default function VirtualExcavationPage(props) {
  return (
    <>
      <h2>Virtual Excavation</h2>
      <UnityLoader></UnityLoader>
    </>
  );
}
