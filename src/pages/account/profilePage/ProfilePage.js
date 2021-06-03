import React from "react";
import { useReactiveVar } from "@apollo/client";
import { Redirect } from "react-router-dom";

import { userVar } from "../../../gql";

import AccountInfo from "./AccountInfo";

export default function ProfilePage(props) {
  const { user } = useReactiveVar(userVar);

  return !user ? (
    <Redirect to="./account/login"></Redirect>
  ) : (
    <>
      <h2>ProfilePage</h2>
      <AccountInfo user={user}></AccountInfo>
    </>
  );
}
