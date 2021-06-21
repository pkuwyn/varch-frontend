import React from "react";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons

// local
import squareBg from "../../../assets/bg/hip-square.png";
import { typeMap } from "../config";
import { AdminEdit } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${squareBg})`,
    backgroundRepeat: "repeat",
  },
}));

export default function VtourIntro({ user, vtour }) {
  const classes = useStyles();
  const { id, learningTime, name, summary, tourType } = vtour;

  const vtourFinished = (id) =>
    user
      ? user.vtoursFinished.map((vtour) => vtour.id).indexOf(id) !== -1
      : false;
  return (
    <Box
      pt={[4, 8]}
      pb={["150px", "200px"]}
      px={[1, 2, 4, 6]}
      className={classes.container}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
        variant="subtitle2"
        color="secondary"
        style={{
          whiteSpace: "pre",
        }}
      >
        {`虚拟实习  |  ${typeMap[tourType]}  |  ${
          user && vtourFinished(id)
            ? "已完成"
            : `预计学习时间${learningTime}分钟`
        }`}
      </Typography>

      <Box display="flex" alignItems="center" mb={2}>
        <Typography
          variant="h3"
          color="primary"
          style={{ fontFamily: "SimSun", fontWeight: 700 }}
          gutterBottom={false}
        >
          {name}
        </Typography>
        <AdminEdit objectType="vtours" id={id}></AdminEdit>
      </Box>

      <Typography
        variant="body1"
        color="initial"
        style={{ maxWidth: "80%", width: "960px" }}
      >
        {summary}
      </Typography>
      {user && <Box width="80%" maxWidth={600} mt={2}></Box>}
    </Box>
  );
}
