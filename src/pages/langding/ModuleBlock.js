import React from "react";

//mui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";

// local
import { modules } from "./config";

import playPatternBg from "../../assets/bg/playstation-pattern.png";

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
        backgroundImage: `url(${playPatternBg})`,
        backgroundRepeat: "repeat",
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
