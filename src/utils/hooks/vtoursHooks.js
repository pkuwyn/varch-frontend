import React from "react";
import { useQuery } from "@apollo/client";
import { GET_VTOURS, GET_VTOUR_BY_ID, GET_VTOURS_COUNT } from "../../gql";

export function useAllVtours() {
  const { loading, error, data } = useQuery(GET_VTOURS);

  return { loading, error, data };
}

export function useVtourById(id) {
  const { loading, error, data } = useQuery(GET_VTOUR_BY_ID, {
    variables: { id },
  });

  return { loading, error, data };
}

export function useVtoursCount() {
  const { loading, error, data } = useQuery(GET_VTOURS_COUNT);

  return { loading, error, data };
}
