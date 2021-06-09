import React from "react";

import client from "./client";
import { CURRENT_USER } from "./UserQuery";

import { makeVar } from "@apollo/client";

export const userVar = makeVar(null);

export const InitUserVar = () => {
  React.useEffect(() => {
    client
      .query({
        query: CURRENT_USER,
      })
      .then((result) => {
        userVar({ user: result.data.authenticatedUser });
      });
  }, []);

  return null;
};
