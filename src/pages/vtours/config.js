import React from "react";

//icons
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import PanoramaIcon from "@material-ui/icons/Panorama";
import WebIcon from "@material-ui/icons/Web";
import PanoramaHorizontalIcon from "@material-ui/icons/PanoramaHorizontal";
const iconProps = { fontSize: "large" };
export const iconSet = {
  model: (
    <ThreeDRotationIcon
      {...iconProps}
      titleAccess="3D遗址"
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
