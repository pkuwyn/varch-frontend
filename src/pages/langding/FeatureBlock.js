import React from "react";

//mui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import Container from "@material-ui/core/Container";
//style
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import CheckIcon from "@material-ui/icons/Check";

// utils

// local
import { features } from "./config";
import square from "../../assets/bg/hip-square.png";
import featureImg from "../../assets/icons/feature.png";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  featureImage: {
    backgroundImage: `url(${featureImg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionContainer: {
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${square})`,
      backgroundRepeat: "repeat",
    },
  },
  sectionTitle: {
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(2),
    },
  },
  icon: {
    position: "relative",
    top: 3,
  },
}));

export default function FeatureBlock(props) {
  const classes = useStyles();

  return (
    <Box
      mt={4}
      pt={1}
      px={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 15,
      }}
      component="section"
      display="flex"
      minHeight={700}
      flexDirection="column"
      justifyContent="center"
      className={classes.sectionContainer}
    >
      <Typography
        variant="h4"
        color="initial"
        align="center"
        gutterBottom
        className={classes.sectionTitle}
      >
        课程特色
      </Typography>

      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} sm={9} md={6}>
            {features.map(({ title, subtitle }, index) => (
              <Box
                width={1}
                display="flex"
                alignItems="flex-start"
                key={index}
                mb={3}
              >
                <Box
                  css={{
                    color: "green",
                  }}
                  fontSize={{
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "2rem",
                  }}
                  mr={{
                    xs: 1,
                    md: 2,
                  }}
                >
                  <SvgIcon fontSize="inherit" className={classes.icon}>
                    <CheckIcon></CheckIcon>
                  </SvgIcon>
                </Box>
                <Box
                  maxWidth={500}
                  mr={{
                    xs: 0,
                    md: 4,
                  }}
                >
                  <Typography variant="h6" color="primary">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    {subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={6} className={classes.featureImage}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
