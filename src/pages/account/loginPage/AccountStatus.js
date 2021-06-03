import React from "react";
import Button from "@material-ui/core/Button";
import { userVar } from "../../../gql";

import { useReactiveVar } from "@apollo/client";
import { useLogout } from "../../../utils/hooks";

export default function AccountStatus(props) {
  const { user } = useReactiveVar(userVar);

  const logoutMutation = useLogout();

  return (
    <>
      <p
        style={{
          wordBreak: "break-all",
          textAlign: "center",
        }}
      >
        {JSON.stringify(user)}
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          logoutMutation();
        }}
      >
        Logout
      </Button>
    </>
  );
}
