import React, { PureComponent, useCallback } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_COURSE, GET_COURSES } from "./gql";

export default function ReadCache(props) {
  const client = useApolloClient();
  const [course, setCourse] = React.useState({});

  const requestFromCache = () => {
    const data = client.readQuery({
      query: GET_COURSE,
      variables: { id: "608130076606703cc0a56301" },
    });
    setCourse(data);
  };
  return (
    <>
      <p>ReacCache</p>
      <button onClick={requestFromCache}>GET ID</button>
      <p>{JSON.stringify(course)}</p>
    </>
  );
}
