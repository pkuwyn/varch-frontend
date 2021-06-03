import React from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_COURSES_FOR_PAGE } from "./gql";

export default function PagedCourses(props) {
  const coursePerPage = 6;
  //   const [pageNumber, setPageNumber] = React.useState(1);
  const { loading, error, data: courses, fetchMore } = useQuery(
    GET_COURSES_FOR_PAGE,
    {
      variables: {
        offset: 0,
        limit: coursePerPage,
      },
    }
  );

  const handleLoad = () => {
    fetchMore({
      variables: {
        offset: courses.allCourses.length,
      },
    });
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <p>Courses </p>
      {courses.allCourses.map(({ name, id }) => (
        <p key={name}>{name}</p>
      ))}
      {/* {pageNumber > 1 ? (
        <button onClick={() => setPageNumber((p) => p - 1)}>
          Previous Page
        </button>
      ) : null}

      {courses.allCourses.length === 0 ? null : (
        <button onClick={() => setPageNumber((p) => p + 1)}>Next Page</button>
      )} */}

      <button onClick={handleLoad}>Load More Courses</button>
    </>
  );
}
