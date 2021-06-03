import React from "react";

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

//icon
import MenuIcon from "@material-ui/icons/Menu";

//local
import { headerTabConfig, iconSet } from "./headerConfig";

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.primary.dark,
    opacity: 1,
    fontWeight: 700,
    "& svg": {
      color: theme.palette.primary.dark,
    },
  },
}));

export default function MobileMenu(props) {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <IconButton aria-label="mobile menu" disableRipple onClick={toggleDrawer}>
        <MenuIcon></MenuIcon>
      </IconButton>

      <SwipeableDrawer
        disableBackdropTransition
        disableDiscovery
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        variant="temporary"
      >
        {headerTabConfig.map(({ label, path }, index) => (
          <ListItem
            key={path}
            button
            divider
            component={NavLink}
            to={path}
            onClick={toggleDrawer}
            activeClassName={classes.active}
          >
            <ListItemIcon>{iconSet[index]}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </SwipeableDrawer>
    </>
  );
}
