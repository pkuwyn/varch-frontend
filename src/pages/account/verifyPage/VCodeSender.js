import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";

const useStyle = makeStyles((theme) => ({
  sendIcon: {
    // ...theme.mixins.accountManageButton,
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  disableText: {
    fontSize: 14,
  },
  infoButton: {
    color: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: "unset",
    },
  },
}));

export default function VCodeSender({ formik, disableSend }) {
  const classes = useStyle();

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        fullWidth
        label="邮箱"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        disabled={disableSend}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="send"
                color="primary"
                disabled={disableSend}
                type="submit"
              >
                <SendIcon />
                {disableSend ? (
                  <span className={classes.disableText}>已发送</span>
                ) : null}
              </IconButton>

              {disableSend ? (
                <Tooltip
                  title="如未收到邮件，请检查邮件垃圾箱"
                  placement="bottom"
                  enterTouchDelay={100}
                  leaveDelay={300}
                  style={{ position: "relative", left: -20 }}
                >
                  <IconButton
                    aria-label=""
                    disableRipple
                    className={classes.infoButton}
                  >
                    <InfoIcon></InfoIcon>
                  </IconButton>
                </Tooltip>
              ) : null}
            </InputAdornment>
          ),
        }}
      ></TextField>
    </form>
  );
}
