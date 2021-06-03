import React from "react";
import Box from "@material-ui/core/Box";

import { useWindowSize } from "../../../utils/hooks";

export function FullPageLayoutBox({ children, ...props }) {
  const size = useWindowSize();

  return (
    <Box
      position="absolute"
      width="100%"
      top={0}
      left={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      zIndex={-100}
      overflow="hidden"
      minHeight={size.height || 800}
      {...props}
    >
      {children}
    </Box>
  );
}
