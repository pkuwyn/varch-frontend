import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
//mui
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//style
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//icons
import SchoolIcon from "@material-ui/icons/School";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

// utils
import clsx from "clsx";

// local

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  // "@global": {
  //   ".tox-editor-header": {
  //     display: "none",
  //   },
  // },
  editorContainer: {
    ...theme.tinymce,
  },
}));

export default function WysiwygViewer({ content }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box maxWidth={960} px={4} mx="auto" className={classes.editorContainer}>
      <Editor
        inline={true}
        tagName="article"
        disabled
        initialValue={content}
        init={{
          content_style: `
            body { font-family:Helvetica,Arial,sans-serif; font-size:14px };
            `,
        }}
      />
    </Box>
  );
}