import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// utils

//icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@keyframes scaleIn": {
    from: {
      transform: "scale(1)",
    },
    to: {
      transform: "scale(1.3)",
    },
  },

  bgImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -3,
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -2,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: `$scaleIn 3s ease-in-out 2s forwards `,
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: `$scaleIn 3s ease-in-out 2s forwards `,
  },
  mainActionButton: {
    marginTop: "1rem",
    fontWeight: 700,
    letterSpacing: "4px",
    fontSize: theme.typography.h6.fontSize,
    marginRight: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
      letterSpacing: "2px",
      fontSize: "1rem",
    },
  },
}));

export default function HeroBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      minHeight={500}
      height="95vh"
      position="relative"
      component="section"
      css={{
        backgroundImage: `linear-gradient(${
          matchesSmDown ? "to bottom" : " to right"
        }, rgba(255,255,255,0.8) 0%,transparent 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box className={classes.bgImageContainer}>
        <img
          src="/assets/img/excavation/video-bg.jpg"
          alt="虚拟发掘"
          className={classes.img}
        />
      </Box>
      <Box className={classes.videoContainer}>
        <video
          src="/assets/img/excavation/video.mp4"
          autoPlay
          muted
          loop
          className={classes.video}
        ></video>
      </Box>
      <Box
        pt="20vh"
        mx={{
          xs: 2,
          sm: 4,
          md: 6,
          lg: 10,
          xl: 15,
        }}
        display="flex"
        flexDirection="column"
        alignItems={matchesSmDown ? "center" : "flex-start"}
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: 900,
          }}
        >
          圆明园澹泊宁静考古遗址
        </Typography>
        <Typography
          variant="h1"
          color="primary"
          style={{
            fontWeight: 700,
            fontFamily: "SimSun",
            position: "relative",

            left: matchesSmDown ? 0 : -10,
          }}
        >
          虚拟发掘
        </Typography>
        <Typography
          variant="body1"
          style={{
            maxWidth: 500,
          }}
          paragraph
          align={matchesSmDown ? "center" : "left"}
        >
          澹泊宁静是圆明园四十景之一，主体是一座田字形的建筑，又称“田字房”。历经清末劫难，澹泊宁静本体建筑遭到严重破坏，1933年的测绘图中表明当时澹泊宁静遗址的建筑格局已经不明朗。2020年经国家文物局批准，对澹泊宁静东南角发掘了500平方米，通过此虚拟发掘程序，您即可虚拟参与此次发掘，并在挖掘过程中学习田野考古知识
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className={classes.mainActionButton}
            endIcon={<ArrowForwardIcon></ArrowForwardIcon>}
            onClick={() => {
              document.getElementById("unityLoader").scrollIntoView();
            }}
          >
            开始发掘
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
