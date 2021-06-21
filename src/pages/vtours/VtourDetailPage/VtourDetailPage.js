import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui
import Typography from "@material-ui/core/Typography";

//style
import { makeStyles } from "@material-ui/core/styles";

// local
import { useUpdateCurrentUser, useVtourById } from "../../../utils/hooks";
import { userVar } from "../../../gql";

import playPatternBg from "../../../assets/bg/playstation-pattern.png";

import VtourIntro from "./VtourIntro";
import { WysiwygViewer } from "../../../components";
import { Question } from "../../../components";
import VtourIframe from "./VtourIframe";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  questionContainer: {
    ...theme.mixins.childrenMargin,
  },
}));

export default function VtourDetailPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);

  //update course finished status
  const updateCurrentUserMutation = useUpdateCurrentUser({
    showSnackBar: false,
  });

  const { vtourId } = useParams();
  let vtour = null;
  const { error, data } = useVtourById(vtourId);

  if (data) {
    vtour = data.Vtour;
  }

  const vtourFinished = (id) =>
    user
      ? user.vtoursFinished.map((vtour) => vtour.id).indexOf(id) !== -1
      : false;

  const handleUpdateUserFinishedVtours = () => {
    //未登录用户跳过
    if (!user) {
      // console.log("not login");

      return null;
    }

    // 已学习用户跳过
    if (vtourFinished(vtourId)) {
      // console.log("allready finished");

      return null;
    }

    const data = {
      vtoursFinished: { connect: { id: vtourId } },
    };
    // console.log(data);
    updateCurrentUserMutation({ variables: { data } });
  };

  if (error) {
    console.log(error);
    return <Redirect to="/vtours"></Redirect>;
  }

  return (
    vtour && (
      <Box
        pb={[4, 8]}
        css={{
          userSelect: "none",
        }}
      >
        <VtourIntro vtour={vtour} user={user}></VtourIntro>
        <VtourIframe
          tourImage={vtour.tourImage}
          url={vtour.url}
          title={vtour.name}
          boxProps={{
            css: {
              transform: "translateY(-150px)",
              marginBottom: "-132px",
            },
          }}
        ></VtourIframe>
        <WysiwygViewer
          content={vtour.content}
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
              实习自测
            </Typography>
            {vtour.questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                handleUpdate={handleUpdateUserFinishedVtours}
              ></Question>
            ))}
          </Box>
        </Box>
      </Box>
    )
  );
}
