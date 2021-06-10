import React from "react";
import { Link as RouterLink } from "react-router-dom";
import QRCode from "qrcode.react";

//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ShareIcon from "@material-ui/icons/Share";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local
import logo from "./images/logo.jpg";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: 200,
    margin: "auto",
    userSelect: "none",
  },
  paper: {
    margin: "auto",
    padding: theme.spacing(2),
    width: "100%",
  },
  title: {
    textAlign: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function QRShare({ url, ...props }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="share" onClick={handleOpen}>
        <ShareIcon></ShareIcon>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="qrcode-share"
        className={classes.dialog}
        classes={{ paper: classes.paper }}
      >
        {props.title ? (
          <DialogTitle id="qrcode-share" className={classes.title}>
            {props.title}
          </DialogTitle>
        ) : null}
        <DialogContent className={classes.content}>
          <QRCode
            value={url}
            size={128}
            renderAs="svg"
            imageSettings={{ src: logo, width: 30, height: 30 }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
