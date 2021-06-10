import React from "react";
import QRCode from "qrcode.react";

//mui

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import ShareIcon from "@material-ui/icons/Share";

// utils

// local
import logo from "./images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: 250,
    margin: "auto",
    userSelect: "none",
  },
  paper: {
    margin: "auto",
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
        <ShareIcon titleAccess="二维码"></ShareIcon>
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
            size={200}
            imageSettings={{ src: logo, width: 50, height: 50 }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
