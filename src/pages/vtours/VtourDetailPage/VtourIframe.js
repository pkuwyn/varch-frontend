import React from "react";

//mui
import Paper from "@material-ui/core/Paper";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// local

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
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

export default function VtourIframe({ url, tourImage, title, boxProps }) {
  const [showIframe, setShowIframe] = React.useState(false);
  const handleClick = () => {
    setShowIframe(true);
  };
  const classes = useStyles();

  return (
    <Box
      width="100%"
      maxWidth={960}
      height={[300, 600]}
      mx="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...boxProps}
    >
      <Box
        width={1}
        height={[300, 600]}
        css={{
          backgroundImage: `url(${process.env.REACT_APP_MEDIA_URI}${tourImage.publicUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: showIframe ? "none" : "block",
        }}
      ></Box>
      {showIframe ? (
        <Box width={1} height={[300, 600]}>
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
      )}
    </Box>
  );
}
