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
import square from "../../assets/bg/hip-square.png";
import featureImg from "../../assets/icons/feature.png";

//box import for high priority
import Box from "@material-ui/core/Box";

const features = [
  {
    title: "循序渐进式教学",
    subtitle:
      "将田野考古教学内容分成三个模块，用户循序渐进的完成三个模块的学习，即可掌握知识",
  },
  {
    title: "对应课堂教学",
    subtitle:
      "教学模块的安排，比对真实的田野考古课堂教学，并通过虚拟仿真等手段解决公众难以参与的教学内容",
  },
  {
    title: "基础知识模块",
    subtitle: "快速学习田野考古基础理论，配套测试题，记录学习进度",
  },
  {
    title: "虚拟实习模块",
    subtitle: "在线田野考古现场参观踏查实习，将基础知识与实地考察相结合",
  },
  {
    title: "虚拟发掘模块",
    subtitle:
      "利用虚拟仿真手段，用户得以参与一次完整的田野发掘，对田野考古发掘过程形成更直观的印象",
  },
];
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
