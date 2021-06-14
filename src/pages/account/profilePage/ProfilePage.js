import React from "react";
import { useReactiveVar } from "@apollo/client";
import { Redirect } from "react-router-dom";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import { userVar } from "../../../gql";
import AccountInfo from "./AccountInfo";
import LearningStatus from "./LearningStatus";
//box import for high priority
import Box from "@material-ui/core/Box";

import { useVtoursCount, useMinimalCoursesCount } from "../../../utils/hooks";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
}));

export default function ProfilePage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  //获取最小教学单元总数量
  const { data: coursesCountData } = useMinimalCoursesCount();

  const { data: vtoursCountData } = useVtoursCount();

  return !user ? (
    <Redirect to="./account/login"></Redirect>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.profileContainer}
      mt={4}
      px={[1, 2, 4, 8]}
      css={{
        userSelect: "none",
      }}
    >
      <AccountInfo user={user}></AccountInfo>

      {coursesCountData && vtoursCountData ? (
        <LearningStatus
          totalCourses={coursesCountData._allCoursesMeta.count}
          // coursesFinished={coursesCountData._allCoursesMeta.count}

          //过滤掉不是最小教学单元的课程
          coursesFinished={
            user.coursesFinished.filter(({ isMinimal }) => isMinimal).length
          }
          totalVtours={vtoursCountData._allVtoursMeta.count}
          // vtoursFinished={vtoursCountData._allVtoursMeta.count}
          vtoursFinished={user.vtoursFinished.length}
          unityFinished={user.unityFinished}
        ></LearningStatus>
      ) : null}
    </Box>
  );
}
