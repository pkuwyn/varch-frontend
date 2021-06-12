import React from "react";
import { Redirect } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";

//mui
import Container from "@material-ui/core/Container";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons

// local
import { useAllVtours } from "../../../utils/hooks";
import { userVar } from "../../../gql";
import VtoursIntro from "./VtoursIntro";
import VtourCard from "./VtourCard";
import WaitingForMore from "./WaitingForMore";

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    transform: "translateY(-150px)",
    marginBottom: "-132px",
  },
}));

export default function VtourIndexPage(props) {
  const classes = useStyles();
  const { user } = useReactiveVar(userVar);
  const vtourFinished = (id) =>
    user
      ? user.vtoursFinished.map((vtour) => vtour.id).indexOf(id) !== -1
      : false;
  let vtours;
  const { data, error } = useAllVtours();
  if (data) {
    vtours = data.allVtours;
  }

  if (error) {
    console.log(error);
    return <Redirect to="/vtours"></Redirect>;
  }

  return vtours ? (
    <Box css={{ userSelect: "none" }}>
      <VtoursIntro user={user} totalVtourNumber={vtours.length}></VtoursIntro>
      <Container maxWidth="lg" disableGutters className={classes.cardContainer}>
        {vtours.map((vtour) => (
          <VtourCard
            key={vtour.id}
            vtour={vtour}
            finished={vtourFinished(vtour.id)}
          ></VtourCard>
        ))}
      </Container>
      {/* <WaitingForMore></WaitingForMore> */}
    </Box>
  ) : null;
}
