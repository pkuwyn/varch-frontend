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
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import FunctionsIcon from "@material-ui/icons/Functions";

// utils
import clsx from "clsx";

// local
import { modules } from "./config";

import bg from "../../assets/bg/shape-bg.png";
import ModuleIntroCard from "./ModuleIntroCard";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  girdItem: {
    maxWidth: 500,
  },
}));
export default function ModuleBlock(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      pt={4}
      px={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 15,
      }}
      component="section"
      css={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      display="flex"
      minHeight={700}
      alignItems="center"
    >
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" color="initial" align="center">
            教学内容
          </Typography>
        </Grid>

        {modules.map(
          ({ title, subtitle, link, headerImage, features, icon, color }) => (
            <Grid item xs={12} md className={classes.girdItem} key={title}>
              <ModuleIntroCard
                title={title}
                subtitle={subtitle}
                iconComponent={icon}
                features={features}
                link={link}
                headerImage={headerImage}
                color={theme.palette[color].main}
              ></ModuleIntroCard>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
