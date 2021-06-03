import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

//icon
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//Hooks
import { useLogout } from "../../utils/hooks";

const useStyles = makeStyles((theme) => ({
  iconRoot: {
    minWidth: 32,
  },
}));

export default function AccountMenuIconButton({ iconProps }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutMutation = useLogout();
  return (
    <>
      <IconButton
        aria-label="account-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <AccountCircleIcon {...iconProps}></AccountCircleIcon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to="/account">
          <ListItemIcon classes={{ root: classes.iconRoot }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="个人资料" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            logoutMutation();
          }}
        >
          <ListItemIcon classes={{ root: classes.iconRoot }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="退出登陆" />
        </MenuItem>
      </Menu>
    </>
  );
}
