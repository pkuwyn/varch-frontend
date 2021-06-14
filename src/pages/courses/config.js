import React from "react";

//icons
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import BuildIcon from "@material-ui/icons/Build";
import MapIcon from "@material-ui/icons/Map";
import FolderIcon from "@material-ui/icons/Folder";
import ClassIcon from "@material-ui/icons/Class";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";

const iconProps = { fontSize: "large", color: "inherit" };
export const iconSet = {
  C1: (
    <ImportContactsIcon
      {...iconProps}
      titleAccess="基础理论"
    ></ImportContactsIcon>
  ),
  C2: <BuildIcon {...iconProps} titleAccess="考古工具"></BuildIcon>,
  C3: <MapIcon {...iconProps} titleAccess="圆明园考古介绍"></MapIcon>,
};

//配色
export const iconColorMap = {
  C1: "primary",
  C2: "secondary",
  C3: "tertiary",
};

//文案
export const categoryConfig = [
  {
    type: "C1",
    urlName: "basic",
    name: "田野考古基础理论",
    categoryImage: "/assets/img/courses/basic.jpg",
    summary:
      "本专题介绍田野考古基础理论知识，包含田野考古的前期准备、野外工作、田室内工作、田野考古报告编写、考古工地管理等内容",
  },
  {
    type: "C2",
    urlName: "tools",
    name: "田野考古常用工具",
    categoryImage: "/assets/img/courses/tools.jpg",
    summary:
      "本专题介绍田野考古工作中常用的工具，包含考古勘探工具、考古发掘工具、考古测量工具几部分内容",
  },
  {
    type: "C3",
    urlName: "ymy",
    name: "圆明园田野考古介绍",
    categoryImage: "/assets/img/courses/ymy.jpg",
    summary:
      "本专题介绍了圆明园的田野考古工作，包含圆明园的考古早期清理工作、勘探发掘工作，并具体介绍了几处有代表性的田野考古遗址",
  },
];

//课程卡片ActionButton
export const actionIconMap = (isMinimal) => {
  return isMinimal ? (
    <ClassIcon titleAccess="课程小节"></ClassIcon>
  ) : (
    <CollectionsBookmarkIcon titleAccess="课程目录"></CollectionsBookmarkIcon>
  );
};
