import React from "react";
//icon
import SchoolIcon from "@material-ui/icons/School";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import FunctionsIcon from "@material-ui/icons/Functions";

//local

export const headerTabConfig = [
  { label: "基础知识", path: "/courses" },
  { label: "虚拟实习", path: "/vtours" },
  { label: "虚拟发掘", path: "/virtual-excavation" },
];

export const iconSet = [
  <SchoolIcon></SchoolIcon>,
  <FlightTakeoffIcon></FlightTakeoffIcon>,
  <AppsIcon></AppsIcon>,
];
