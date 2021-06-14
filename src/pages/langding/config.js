import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AppsIcon from "@material-ui/icons/Apps";

//ModuleBlock Data
export const modules = [
  {
    title: "基础知识",
    subtitle: "田野考古基础理论知识",
    features: ["田野考古基础理论", "常见田野考古工具", "圆明园考古工作概况"],
    link: "/courses",
    headerImage: "/assets/img/landing/module1.jpg",
    icon: <SchoolIcon></SchoolIcon>,
    color: "primary",
  },
  {
    title: "虚拟实习",
    subtitle: "在线考古遗址踏查实习",
    features: ["考古遗址3D漫游", "考古遗址全景漫游", "遗址知识点讲解"],
    link: "/vtours",
    headerImage: "/assets/img/landing/module2.jpg",
    icon: <FlightTakeoffIcon></FlightTakeoffIcon>,
    color: "tertiary",
  },
  {
    title: "虚拟发掘",
    subtitle: "建筑遗址虚拟考古发掘",
    features: ["流程化发掘引导", "高自由度发掘操作", "遗迹现象解读"],
    link: "/virtual-excavation",
    headerImage: "/assets/img/landing/module3.jpg",
    icon: <AppsIcon></AppsIcon>,
    color: "secondary",
  },
];
//FeatureBlock Data
export const features = [
  {
    title: "循序渐进式教学",
    subtitle:
      "将田野考古教学内容分成三个模块，用户循序渐进的完成三个模块的学习，即可掌握知识",
  },
  {
    title: "对应课堂教学",
    subtitle:
      "教学模块的安排，比对真实的田野考古课堂教学，并通过虚拟仿真等手段解决公众难以参与的教学内容",
  },
  {
    title: "基础知识模块",
    subtitle: "快速学习田野考古基础理论，配套测试题，记录学习进度",
  },
  {
    title: "虚拟实习模块",
    subtitle: "在线田野考古现场参观踏查实习，将基础知识与实地考察相结合",
  },
  {
    title: "虚拟发掘模块",
    subtitle:
      "利用虚拟仿真手段，用户得以参与一次完整的田野发掘，对田野考古发掘过程形成更直观的印象",
  },
];
