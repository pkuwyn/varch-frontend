import React from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

//make sure the page return to top if url changes
export function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
