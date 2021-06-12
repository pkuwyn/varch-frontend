import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NavLink } from "react-router-dom";

//local
import { headerTabConfig, iconSet } from "./headerConfig";

const useStyles = makeStyles((theme) => ({
  tabRoot: {
    opacity: 1,
    "& svg": {
      marginBottom: `0 !important`,
      marginRight: 4,
    },
    minWidth: 120,
    [theme.breakpoints.up("lg")]: {
      minWidth: 160,
    },
    [theme.breakpoints.up("xl")]: {
      minWidth: 200,
    },
  },
  tabWrapper: {
    flexDirection: "row",
    alignItems: "center",
    transition: "all 0.3s",
    "&:hover": {
      transform: "translateY(-2px)",
    },
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
      // centered
      aria-label="website menu"
      // className={classes.tabs}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      {headerTabConfig.map(({ label, path, exact }, index) => (
        <Tab
          key={path}
          label={label}
          component={NavLink}
          exact={exact}
          to={path}
          classes={{ root: classes.tabRoot, wrapper: classes.tabWrapper }}
          activeClassName={classes.active}
          icon={iconSet[index]}
        />
      ))}
    </Tabs>
  );
}
