import React from "react";
import { Editor } from "@tinymce/tinymce-react";

//style
import { makeStyles } from "@material-ui/core/styles";

// local

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  editorContainer: {
    ...theme.tinymce,
    userSelect: "text",
  },
}));

export default function WysiwygViewer({ content, boxProps }) {
  const classes = useStyles();

  return (
    <Box
      px={[1, 1, 1, 0]}
      mx="auto"
      className={classes.editorContainer}
      {...boxProps}
    >
      <Editor
        inline={true}
        tagName="article"
        disabled
        initialValue={content}
        // init={{
        //   content_style: `
        //     body { font-family:Helvetica,Arial,sans-serif; font-size:14px };
        //     `,
        // }}
      />
    </Box>
  );
}
