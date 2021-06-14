import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
import UnityLoader from "./UnityLoader";
import HeroBlock from "./HeroBlock";
import { useUpdateCurrentUser } from "../../utils/hooks";
import { userVar } from "../../gql";
//box import for high priority
import Box from "@material-ui/core/Box";

export default function VirtualExcavationPage(props) {
  const { user } = useReactiveVar(userVar);
  //update virtual excavation finished status
  const updateCurrentUserMutation = useUpdateCurrentUser({
    showSnackBar: false,
  });

  React.useEffect(() => {
    const handleUpdateUserFinishedVtours = () => {
      //未登录用户跳过
      if (!user) {
        return null;
      }

      // 已学习用户跳过
      if (user.unityFinished) {
        return null;
      }

      const data = {
        unityFinished: true,
      };
      updateCurrentUserMutation({ variables: { data } });
    };

    const autoUnityFinishTimer = setTimeout(handleUpdateUserFinishedVtours);
    return () => {
      console.log("clear");
      clearTimeout(autoUnityFinishTimer);
    };
  }, []);
  return (
    <Box>
      <HeroBlock></HeroBlock>

      <UnityLoader></UnityLoader>
    </Box>
  );
}
