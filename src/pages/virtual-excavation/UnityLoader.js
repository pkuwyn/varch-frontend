import React from "react";

//mui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import GetAppIcon from "@material-ui/icons/GetApp";
// utils

// local

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  unityIframe: {
    width: 1280,
    height: 900,
    overflow: "hidden",
    // [theme.breakpoints.up(600)]: {
    //   width: 480,
    //   height: 270,
    // },
    // [theme.breakpoints.up(960)]: {
    //   width: 720,
    //   height: 405,
    // },
    // [theme.breakpoints.up(1400)]: {
    //   width: 1280,
    //   height: 720,
    // },
  },
}));

export default function UnityLoader(props) {
  const classes = useStyles();

  console.log(process.env.REACT_APP_UNITY_URI);

  return (
    <Box
      id="unityLoader"
      mx="auto"
      mt={[4, 6, 8]}
      px={[1, 2, 4]}
      maxWidth={1}
      width={1280}
    >
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <Typography
            variant="h4"
            color="primary"
            align="center"
            gutterBottom={false}
            style={{ fontWeight: 700, marginRight: 16 }}
          >
            澹泊宁静虚拟发掘
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => {
              window.open(process.env.REACT_APP_UNITY_DESKTOP_URI);
            }}
            endIcon={<GetAppIcon titleAccess="下载桌面版"></GetAppIcon>}
          >
            下载桌面版
          </Button>
        </Box>

        <Typography variant="body2" color="textPrimary" align="center">
          3D程序资源较大请耐心等待加载，使用桌面端Chrome浏览器，配合键盘鼠标进行发掘
        </Typography>
      </Box>

      <iframe
        src={process.env.REACT_APP_UNITY_WEBGL_URI}
        title="澹泊宁静虚拟发掘"
        name="澹泊宁静虚拟发掘"
        frameBorder={0}
        border={0}
        className={classes.unityIframe}
        loading="eager"
        scrolling="no"
        allowFullScreen={true}
      ></iframe>
    </Box>
  );
}
