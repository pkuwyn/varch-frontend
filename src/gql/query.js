import { gql } from "@apollo/client";

import { COURSES_FIELDS, USERS_FIELDS } from "./fragments";
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

export const CURRENT_USER = gql`
  ${USERS_FIELDS}
  query getCurrentUser {
    authenticatedUser {
      ...UsersFields
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
