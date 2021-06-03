import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

export default function ElevationScroll({
  children,
  elevationValue,
  elevationValueBefore,
}) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? elevationValue : elevationValueBefore,
  });
}
