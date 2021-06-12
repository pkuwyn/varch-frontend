import React from "react";
import Lottie from "react-lottie";

import Box from "@material-ui/core/Box";
import animationData from "../assets/animations/congratulation.json";

export default function CongratulationAnimation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width="200px" />;
}
