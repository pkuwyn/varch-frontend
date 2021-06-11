import React from "react";
import { Link as RouterLink, useParams, Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

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
import { userVar } from "../../../gql";
import { useVtourById } from "../../../utils/hooks";
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

  const { vtourId } = useParams();
  let vtour = null;
  const { error, data } = useVtourById(vtourId);

  if (data) {
    vtour = data.Vtour;
    console.log(vtour);
  }

  // const theme = useTheme();
  // const matchXsDown = useMediaQuery(theme.breakpoints.down("xs"));
  if (error) {
    console.log(error);
    return <Redirect to="/vtours"></Redirect>;
  }

  return (
    vtour && (
      <Box>
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
          maxWidth="100%"
          width={960}
          mx="auto"
          className={classes.questionContainer}
        >
          {vtour.questions.map((question) => (
            <Question key={question.id} question={question}></Question>
          ))}
        </Box>
      </Box>
    )
  );
}
