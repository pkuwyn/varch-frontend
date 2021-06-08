import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import Box from "@material-ui/core/Box";

//local import
import logo from "../../assets/logos/logo.png";
import { footLinkConfig } from "./footLinkConfig";
import SiteMap from "./SiteMap";
import QRCodeForCurrenttPage from "./QRCodeForCurrenttPage";

const useStyles = makeStyles((theme) => ({}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      p={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      minHeight={300}
      bgcolor="grey.300"
      color="common.black"
      display="flex"
      alignItems="center"
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          {/* <img src={logo} alt="" width={200} height={200} />
           */}
          <QRCodeForCurrenttPage></QRCodeForCurrenttPage>
        </Grid>

        <Grid item xs={12} md={8}>
          <SiteMap linkConfig={footLinkConfig}></SiteMap>
        </Grid>
      </Grid>
    </Box>
  );
}
