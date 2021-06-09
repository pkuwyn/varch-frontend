import React from "react";

//icon
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AppsIcon from "@material-ui/icons/Apps";

//local

export const headerTabConfig = [
  { label: "首页", path: "/", exact: true },
  { label: "基础知识", path: "/courses", exact: false },
  { label: "虚拟实习", path: "/vtours", exact: false },
  { label: "虚拟发掘", path: "/virtual-excavation", exact: false },
];

export const iconSet = [
  <HomeIcon></HomeIcon>,
  <SchoolIcon></SchoolIcon>,
  <FlightTakeoffIcon></FlightTakeoffIcon>,
  <AppsIcon></AppsIcon>,
];
