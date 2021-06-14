import React from "react";
import Box from "@material-ui/core/Box";

export function FullPageLayoutBox({ children, ...props }) {
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
      minHeight="100vh"
      height={900}
      {...props}
    >
      {children}
    </Box>
  );
}
