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
        <Grid item xs={12} md className={classes.girdItem}>
          <ModuleIntroCard
            title="基础知识"
            subtitle="田野考古基础理论知识"
            iconComponent={<SchoolIcon color="inherit" />}
            features={[
              "田野考古基础理论",
              "常见田野考古工具",
              "圆明园考古工作概况",
            ]}
            link="/courses"
            headerImage="/assets/img/landing/tf1.jpg"
            color={theme.palette.primary.main}
          ></ModuleIntroCard>
        </Grid>

        <Grid item xs={12} md className={classes.girdItem}>
          <ModuleIntroCard
            title="虚拟实习"
            subtitle="在线考古遗址踏查实习"
            iconComponent={<FlightTakeoffIcon color="inherit" />}
            features={["考古遗址3D漫游", "遗址全景漫游", "遗址重要知识点讲解"]}
            link="/vtours"
            headerImage="/assets/img/landing/module2.jpg"
            color={theme.palette.tertiary.dark}
          ></ModuleIntroCard>
        </Grid>

        <Grid item xs={12} md className={classes.girdItem}>
          <ModuleIntroCard
            title="虚拟发掘"
            subtitle="建筑遗址虚拟考古发掘"
            iconComponent={<AppsIcon color="inherit" />}
            features={["流程化发掘引导", "高自由度发掘操作", "遗迹现象解读"]}
            link="/virtual-excavation"
            headerImage="/assets/img/landing/module3.jpg"
            color={theme.palette.secondary.light}
          ></ModuleIntroCard>
        </Grid>
      </Grid>
    </Box>
  );
}
