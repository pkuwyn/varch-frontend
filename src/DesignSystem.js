import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function DesignSystem(props) {
  const theme = useTheme();
  const [changeFontFamily, setChangeFontFamily] = React.useState(false);
  return (
    <Box>
      {/* color */}
      <Box w={1} display="flex" alignItems="center" flexDirection="column">
        {/* primary */}
        <Box display="flex" flexDirection="row" mb={2}>
          <Box width={200} height={200} bgcolor="primary.light" mr={2}>
            primary.light
          </Box>

          <Box width={200} height={200} bgcolor="primary.main" mr={2}>
            primary.main
          </Box>
          <Box width={200} height={200} bgcolor="primary.dark" mr={2}>
            primary.dark
          </Box>
        </Box>

        {/* secondary */}

        <Box display="flex" flexDirection="row" mb={2}>
          <Box width={200} height={200} bgcolor="secondary.light" mr={2}>
            secondary.light
          </Box>
          <Box width={200} height={200} bgcolor="secondary.main" mr={2}>
            secondary.main
          </Box>
          <Box width={200} height={200} bgcolor="secondary.dark" mr={2}>
            secondary.dark
          </Box>
        </Box>
      </Box>

      {/* font */}
      <Box
        css={{
          fontFamily: changeFontFamily ? "SimSun" : "inherit",
        }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            setChangeFontFamily(!changeFontFamily);
          }}
        >
          切换字体
        </Button>
        <Typography
          variant="h1"
          component="h2"
          style={{ fontFamily: "inherit" }}
        >
          h1. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h1)}</p>
        <Typography variant="h2" style={{ fontFamily: "inherit" }}>
          h2. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h2)}</p>
        <Typography variant="h3" style={{ fontFamily: "inherit" }}>
          h3. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h3)}</p>
        <Typography variant="h4" style={{ fontFamily: "inherit" }}>
          h4. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h4)}</p>
        <Typography variant="h5" style={{ fontFamily: "inherit" }}>
          h5. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h5)}</p>
        <Typography variant="h6" style={{ fontFamily: "inherit" }}>
          h6. Heading 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.h6)}</p>
        <Typography variant="subtitle1" style={{ fontFamily: "inherit" }}>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>
          {JSON.stringify(theme.typography.subtitle1)}
        </p>
        <Typography variant="subtitle2" style={{ fontFamily: "inherit" }}>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>
          {JSON.stringify(theme.typography.subtitle2)}
        </p>
        <Typography variant="body1" style={{ fontFamily: "inherit" }}>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.body1)}</p>
        <Typography variant="body2" style={{ fontFamily: "inherit" }}>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>{JSON.stringify(theme.typography.body2)}</p>
        <Typography
          variant="button"
          display="block"
          style={{ fontFamily: "inherit" }}
        >
          button text 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>
          {JSON.stringify(theme.typography.button)}
        </p>
        <Typography
          variant="caption"
          display="block"
          style={{ fontFamily: "inherit" }}
        >
          caption text 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>
          {JSON.stringify(theme.typography.caption)}
        </p>
        <Typography variant="overline" display="block" gutterBottom>
          overline text 虚拟仿真田野考古
        </Typography>
        <p style={{ color: "red" }}>
          {JSON.stringify(theme.typography.overline)}
        </p>
      </Box>
    </Box>
  );
}
