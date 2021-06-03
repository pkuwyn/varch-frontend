import React from "react";

import Lottie from "react-lottie";
import animationData from "./assets/animations/congratulation.json";

export default function LottieTest(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={400} width={400} />
    </>
  );
}
