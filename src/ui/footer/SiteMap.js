import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import Box from "@material-ui/core/Box";

export default function SiteMap({ linkConfig }) {
  return (
    <>
      {linkConfig.map((links) => (
        <Box display="flex" flexDirection="column">
          {links.map((link) => (
            <Link component={RouterLink} to={link.path} color="inherit">
              {link.label}
            </Link>
          ))}
        </Box>
      ))}
    </>
  );
}
