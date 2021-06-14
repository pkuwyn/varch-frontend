import React from "react";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import square from "../../../assets/bg/hip-square.png";
import { ProgressBar } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${square})`,
    backgroundRepeat: "repeat",
  },
}));

export default function VtoursIntro({ user, totalVtourNumber }) {
  const classes = useStyles();

  return (
    <Box
      pt={4}
      pb="200px"
      className={classes.container}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="caption" color="textPrimary">
        田野考古
      </Typography>

      <Typography
        variant="h3"
        color="primary"
        style={{ fontFamily: "SimSun", fontWeight: 700 }}
        gutterBottom
      >
        虚拟实习
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        style={{ maxWidth: "80%", width: "960px" }}
      >
        参与以下虚拟田野考古实习项目，利用实景三维模型、全景漫游、交互网站等方式，进行考古遗址线上踏查实习
      </Typography>
      {user && (
        <Box width="80%" maxWidth={600} mt={2}>
          <ProgressBar
            total={totalVtourNumber}
            finished={user.vtoursFinished.length}
            color="secondary"
          >
            <Typography variant="body2" color="initial">
              {`已完成${user.vtoursFinished.length}/${totalVtourNumber}`}
            </Typography>
          </ProgressBar>
        </Box>
      )}
    </Box>
  );
}
