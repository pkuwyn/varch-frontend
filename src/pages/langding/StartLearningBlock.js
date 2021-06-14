import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AppsIcon from "@material-ui/icons/Apps";

// local
import startLearningBg from "../../assets/bg/start-learning.png";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: "1.25rem",
    color: theme.palette.common.black,
    backgroundColor: theme.palette.success.light,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
    minWidth: 100,
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    [theme.breakpoints.down("xs")]: {
      "&:not(:last-child)": {
        marginBottom: theme.spacing(2),
      },
    },
  },
  label: {
    ...theme.mixins.buttonLabelWithArrow,
  },
  stepper: {
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  completed: {
    color: theme.palette.primary.main,
  },
}));
const stepperConfig = [
  { label: "基础知识", icon: <SchoolIcon></SchoolIcon> },

  { label: "虚拟实习", icon: <FlightTakeoffIcon></FlightTakeoffIcon> },

  { label: "虚拟发掘", icon: <AppsIcon></AppsIcon> },
];

const buttonConfig = [
  { label: "学习基础知识", link: "/courses" },
  { label: "开始虚拟实习", link: "/vtours" },
  { label: "开始虚拟发掘", link: "/virtual-excavation" },
];

export default function StartLearningBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  //steper state
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box
      py={2}
      px={{
        xs: 2,
        sm: 4,
        md: 6,
        lg: 10,
        xl: 15,
      }}
      component="section"
      css={{
        backgroundImage: `linear-gradient(
to bottom,#ffffff 0%,rgba(255,218,164,0.52) 100%),url(${startLearningBg});`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      minHeight={500}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="caption" color="textPrimary" align="center">
        建议按以下顺序
      </Typography>
      <Typography
        variant={matchXsDown ? "h4" : "h3"}
        color="primary"
        align="center"
        style={{ fontFamily: "SimSun", fontWeight: 700 }}
        gutterBottom
      >
        开启田野考古之旅!
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box mx="auto" maxWidth={960} mb={2}>
            <Stepper
              nonLinear
              alternativeLabel
              activeStep={activeStep}
              elevation={0}
              className={classes.stepper}
            >
              {stepperConfig.map(({ label, icon }, index) => (
                <Step
                  key={label}
                  classes={{
                    completed: classes.completed,
                  }}
                  completed={activeStep === index}
                >
                  <StepButton
                    onClick={handleStep(index)}
                    icon={icon}
                    disableRipple
                  >
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
      </Grid>
      <Grid container width={1}>
        <Grid item xs={12} sm>
          <Box width={1} display="flex" justifyContent="center" mb={{ xs: 2 }}>
            <Button
              variant="contained"
              component={RouterLink}
              to={buttonConfig[activeStep].link}
              className={classes.button}
              classes={{ label: classes.label }}
            >
              {buttonConfig[activeStep].label}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
