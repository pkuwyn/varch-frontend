import React from "react";
import { Redirect } from "react-router-dom";

export default function AccountInfo({ user }) {
  return <>AccountInfo : {JSON.stringify(user)}</>;
}
