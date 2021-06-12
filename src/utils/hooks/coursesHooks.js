import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import {
  GET_COURSES_COUNT,
  GET_MINIMAL_COURSES_COUNT,
  GET_MINIMAL_CATEGORY_COURSES_COUNT,
} from "../../gql";

// export function useAllVtours() {
//   const { loading, error, data } = useQuery(GET_VTOURS);

//   return { loading, error, data };
// }

// export function useVtourById(id) {
//   const { loading, error, data } = useQuery(GET_VTOUR_BY_ID, {
//     variables: { id },
//   });

//   return { loading, error, data };
// }

export function useCoursesCount() {
  const { loading, error, data } = useQuery(GET_COURSES_COUNT);

  return { loading, error, data };
}

export function useMinimalCoursesCount() {
  const { loading, error, data } = useQuery(GET_MINIMAL_COURSES_COUNT);

  return { loading, error, data };
}

export function useMinimalCoursesOfCategoryCount(category) {
  const { loading, error, data } = useQuery(
    GET_MINIMAL_CATEGORY_COURSES_COUNT,
    {
      variables: { category },
    }
  );

  return { loading, error, data };
}
