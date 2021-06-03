import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/animations/signup.json";

import Box from "@material-ui/core/Box";

export default function SignUpAnimation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box width={1} maxWidth={[300, 350, 400, 450]} mx="auto">
      <Lottie options={defaultOptions} {...props} />
    </Box>
  );
}
