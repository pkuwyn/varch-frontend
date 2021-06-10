import React from "react";
import { Link as RouterLink } from "react-router-dom";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// utils
import clsx from "clsx";

// local

//box import for high priority
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  iframeContainer: {},
  paper: {
    borderRadius: 100,
    position: "absolute",
    width: "5rem",
    height: "5rem",
    "&:hover": {
      boxShadow: theme.shadows[24],
    },
  },
  iconButton: {
    position: "absolute",
    width: "5rem",
    height: "5rem",
    backgroundColor: theme.palette.background.paper,
  },
  playIcon: {
    fontSize: "5rem",
    color: "black",
  },
}));

export default function VtourIframe({ url, tourImage, title }) {
  const [showIframe, setShowIframe] = React.useState(false);
  const handleClick = () => {
    setShowIframe(true);
  };
  const classes = useStyles();
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      width="100%"
      maxWidth={1280}
      mx="auto"
      className={classes.iframeContainer}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={`${process.env.REACT_APP_MEDIA_URI}${tourImage.publicUrl}`}
        alt={title}
        width="100%"
        style={{
          display: showIframe ? "none" : "block",
        }}
      />
      {showIframe ? (
        <Box width={1} height={[300, 600, 900]}>
          <iframe
            src={url}
            frameborder="0"
            width="100%"
            height="100%"
            title={title}
            allowfullscreen="true"
          ></iframe>
        </Box>
      ) : (
        <Paper className={classes.paper}>
          <PlayArrowIcon
            fontSize="inherit"
            onClick={handleClick}
            className={classes.playIcon}
            titleAccess="开始实习"
          ></PlayArrowIcon>
        </Paper>
        // <IconButton className={classes.iconButton} color="secondary">

        // </IconButton>
      )}
    </Box>
  );
}
