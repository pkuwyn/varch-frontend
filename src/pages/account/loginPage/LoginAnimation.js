import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/animations/login.json";

import Box from "@material-ui/core/Box";

export default function LoginAnimation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box
      width={1}
      maxWidth={[300, 350, 400, 450]}
      mx="auto"
      overflow="hidden"
      position="relative"
    >
      <Box py="45%">
        <Box position="absolute" top="-15%" left={0} overflow="hidden">
          <Lottie options={defaultOptions} {...props} />
        </Box>
      </Box>
    </Box>
  );
}
