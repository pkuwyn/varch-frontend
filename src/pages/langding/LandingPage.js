import React from "react";

// local
import { userVar } from "../../gql";
import { useReactiveVar } from "@apollo/client";
import HeroBlock from "./HeroBlock";
import ModuleBlock from "./ModuleBlock";
import FeatureBlock from "./FeatureBlock";
import RegisterBlock from "./RegisterBlock";
import StartLearningBlock from "./StartLearningBlock";

//box import for high priority
import Box from "@material-ui/core/Box";

export default function LandingPage(props) {
  const { user } = useReactiveVar(userVar);
  return (
    <Box css={{ userSelect: "none" }}>
      <HeroBlock></HeroBlock>
      <ModuleBlock></ModuleBlock>
      <FeatureBlock></FeatureBlock>

      {user ? null : <RegisterBlock></RegisterBlock>}
      {user ? <StartLearningBlock></StartLearningBlock> : null}
    </Box>
  );
}
