import React from "react";
import { useApolloClient } from "@apollo/client";
import { GET_COURSES } from "./gql";
import { gql } from "@apollo/client";

export default function WriteCache(props) {
  const client = useApolloClient();
  const { allCourses } = client.readQuery({ query: GET_COURSES });
  console.log(allCourses);

  const newCourse = {
    __typename: "Course",
    id: "666666666666666",
    name: "客户端增加的课程",
    other_field: "other field data",
  };

  const writeToCache = () => {
    console.log("write");
    client.writeQuery({
      query: GET_COURSES,

      data: {
        allCourses: [...allCourses, newCourse],
      },
      //   variables: {
      //     id: "6666666666666",
      //   },
      id: "",
    });

    // client.writeFragment({
    //   id: "Course:6666666666666",
    //   fragment: gql`
    //     fragment MyCourse on Course {
    //       id
    //       name
    //       other_field
    //     }
    //   `,
    //   data,
    // });
  };
  return <button onClick={writeToCache}>Write To Cache</button>;
}
