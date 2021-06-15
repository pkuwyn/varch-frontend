import React from "react";
import { useReactiveVar } from "@apollo/client";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons

// utils

// local
import playPatternBg from "../../../assets/bg/playstation-pattern.png";
import { useUpdateCurrentUser } from "../../../utils/hooks";
import { userVar } from "../../../gql";
import { WysiwygViewer } from "../../../components";
import { Question } from "../../../components";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  questionContainer: {
    ...theme.mixins.childrenMargin,
  },
}));

export default function MinimalCourseContent({ course, finished }) {
  const classes = useStyles();
  const { id, content, coverImage, questions } = course;
  const { user } = useReactiveVar(userVar);

  //update course finished status
  const updateCurrentUserMutation = useUpdateCurrentUser({
    showSnackBar: false,
  });

  const handleUpdateUserFinishedCourse = () => {
    //未登录用户跳过
    if (!user) {
      // console.log("not login");
      return null;
    }

    // 已学习用户跳过
    if (finished) {
      // console.log("allready finished");
      return null;
    }

    const data = {
      coursesFinished: { connect: { id: id } },
    };
    // console.log(data);
    updateCurrentUserMutation({ variables: { data } });
  };

  return (
    <Box pb={[4, 8]}>
      <Box
        width="100%"
        maxWidth={960}
        height={[300, 600]}
        mx="auto"
        css={{
          transform: "translateY(-150px)",
          marginBottom: "-132px",
          backgroundImage: `url(${process.env.REACT_APP_MEDIA_URI}${coverImage.publicUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <WysiwygViewer
        content={content}
        boxProps={{
          maxWidth: "100%",
          width: 960,
          // overflow: "hidden",
        }}
      ></WysiwygViewer>

      <Box
        width={1}
        py={4}
        css={{
          backgroundImage: `url(${playPatternBg})`,
          backgroundRepeat: "repeat",
        }}
      >
        <Box
          mx="auto"
          maxWidth="100%"
          width={960}
          px={[1, 2, 4]}
          className={classes.questionContainer}
        >
          <Typography
            variant="h5"
            color="primary"
            align="center"
            style={{ fontWeight: 700 }}
          >
            课程自测
          </Typography>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              handleUpdate={handleUpdateUserFinishedCourse}
            ></Question>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
