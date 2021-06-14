import React from "react";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//box import for high priority
import Box from "@material-ui/core/Box";

// const useStyles = makeStyles((theme) => ({}));

export default function WaitingForMore(props) {
  // const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="secondary.light"
      fontSize="2rem"
    >
      <Typography variant="h6" color="inherit" disableGutters>
        更多实习，敬请期待
      </Typography>
      <MoreHorizIcon fontSize="inherit"></MoreHorizIcon>
    </Box>
  );
}
