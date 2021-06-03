import React from "react";
import animationData from "../../../assets/animations/login.json";

import { LottieAnimation } from "../components";

export default function LoginAnimation() {
  return (
    <LottieAnimation
      py="45%"
      top="-15%"
      animationData={animationData}
    ></LottieAnimation>
  );
}
