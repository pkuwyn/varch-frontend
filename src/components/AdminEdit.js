import React from "react";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../gql";

//mui
import IconButton from "@material-ui/core/IconButton";

//style
import { makeStyles } from "@material-ui/core/styles";

//icons
import EditIcon from "@material-ui/icons/Edit";

// local

//box import for high priority
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({}));

export default function AdminEdit({ id, objectType, ...props }) {
  const { user } = useReactiveVar(userVar);

  return user && user.isAdmin ? (
    <IconButton
      onClick={() => {
        window.open(`${process.env.REACT_APP_ADMIN_URI}/${objectType}/${id}`);
      }}
      {...props}
    >
      <EditIcon titleAccess="后台管理"></EditIcon>
    </IconButton>
  ) : null;
}
