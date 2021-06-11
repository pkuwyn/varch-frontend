import React from "react";

//icons
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import PanoramaIcon from "@material-ui/icons/Panorama";
import WebIcon from "@material-ui/icons/Web";
import PanoramaHorizontalIcon from "@material-ui/icons/PanoramaHorizontal";
const iconProps = { fontSize: "large", color: "inherit" };
export const iconSet = {
  model: (
    <ThreeDRotationIcon
      {...iconProps}
      titleAccess="实景模型"
    ></ThreeDRotationIcon>
  ),
  pano: (
    <PanoramaHorizontalIcon
      {...iconProps}
      titleAccess="全景漫游"
    ></PanoramaHorizontalIcon>
  ),
  html: <WebIcon {...iconProps} titleAccess="交互网页"></WebIcon>,
};

export const typeMap = {
  model: "实景模型",
  pano: "全景漫游",
  html: "交互网页",
};

export const iconColorMap = {
  pano: "primary",
  model: "secondary",
  html: "tertiary",
};
