import React from "react";
import { useQuery } from "@apollo/client";

import {
  GET_COURSE_BY_ID,
  GET_FIRST_LEVEL_COURSES_BY_CATEGORY,
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

export function useCourseById(id) {
  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: { id },
  });

  return { loading, error, data };
}

export function useFirstLevelCoursesByCategory(category) {
  const { loading, error, data } = useQuery(
    GET_FIRST_LEVEL_COURSES_BY_CATEGORY,
    {
      variables: { category },
    }
  );
  return { loading, error, data };
}

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
