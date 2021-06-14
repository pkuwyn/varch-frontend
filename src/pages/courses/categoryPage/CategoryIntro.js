import React from "react";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import soilBg from "../../../assets/bg/soil.png";
import { ProgressBar } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${soilBg})`,
    backgroundRepeat: "repeat",
  },
}));

export default function CategoryIntro({ user, totalCourses, categoryData }) {
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
        基础知识
      </Typography>

      <Typography
        variant="h3"
        color="primary"
        style={{ fontFamily: "SimSun", fontWeight: 700 }}
        gutterBottom
      >
        {categoryData.name}
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        style={{ maxWidth: "80%", width: "960px" }}
      >
        {categoryData.summary}
      </Typography>
      {user && (
        <Box width="80%" maxWidth={600} mt={2}>
          <ProgressBar
            total={totalCourses}
            finished={
              user.coursesFinished.filter(
                ({ isMinimal, category }) =>
                  category === categoryData.type && isMinimal
              ).length
            }
            color="secondary"
          >
            <Typography variant="body2" color="initial">
              {`已完成${
                user.coursesFinished.filter(
                  ({ isMinimal, category }) =>
                    category === categoryData.type && isMinimal
                ).length
              }/${totalCourses}`}
            </Typography>
          </ProgressBar>
        </Box>
      )}
    </Box>
  );
}
