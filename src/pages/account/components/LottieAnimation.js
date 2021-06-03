import React from "react";
import Lottie from "react-lottie";

import Box from "@material-ui/core/Box";

export default function LottieAnimation({ animationData, top, py, ...props }) {
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
      bgColor="red"
      position="relative"
    >
      <Box py={py}>
        <Box position="absolute" top={top} left={0} overflow="hidden">
          <Lottie options={defaultOptions} {...props} />
        </Box>
      </Box>
    </Box>
  );
}
