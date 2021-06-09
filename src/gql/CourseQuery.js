import { gql } from "@apollo/client";

import { COURSES_FIELDS } from "./fragments";

export const GET_COURSES = gql`
  ${COURSES_FIELDS}
  query getAllCourses {
    allCourses {
      ...CoursesFields
    }
  }
`;

export const GET_COURSES_FOR_PAGE = gql`
  ${COURSES_FIELDS}
  query getAllCourses($offset: Int!, $limit: Int!) {
    allCourses(skip: $offset, first: $limit) {
      ...CoursesFields
    }
  }
`;

export const GET_COURSE = gql`
  ${COURSES_FIELDS}
  query getCourse($id: ID!) {
    Course(where: { id: $id }) {
      ...CoursesFields
    }
  }
`;

export const SEARCH_COURSES = gql`
  ${COURSES_FIELDS}
  query getAllCourses($search: String) {
    allCourses(search: $search) {
      ...CoursesFields
    }
  }
`;

export const GET_LONGEST_COURSE = gql`
  query getLongestCourse {
    allCourses(sortBy: learningTime_DESC, first: 1) {
      learningTime
    }
  }
`;
