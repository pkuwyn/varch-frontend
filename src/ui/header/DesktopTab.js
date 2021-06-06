import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link as RouterLink, NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//icon

import AppsIcon from "@material-ui/icons/Apps";

//local
import { headerTabConfig, iconSet } from "./headerConfig";

const useStyles = makeStyles((theme) => ({
  tabRoot: {
    opacity: 1,
    "& svg": {
      marginBottom: `0 !important`,
      marginRight: 4,
    },
  },
  tabWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  active: {
    color: theme.palette.secondary.dark,
    opacity: 1,
    fontWeight: 700,
  },
}));

export default function DesktopTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      aria-label="website menu"
      // className={classes.tabs}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      {headerTabConfig.map(({ label, path }, index) => (
        <Tab
          key={path}
          label={label}
          component={NavLink}
          to={path}
          classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }}
          activeClassName={classes.active}
          icon={iconSet[index]}
        />
      ))}
    </Tabs>
  );
}
