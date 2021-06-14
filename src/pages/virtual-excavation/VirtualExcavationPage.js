import React from "react";
import { useReactiveVar } from "@apollo/client";

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
  });
  return (
    <Box>
      <HeroBlock></HeroBlock>

      <UnityLoader></UnityLoader>
    </Box>
  );
}
