import { gql } from "@apollo/client";

import { COURSES_FIELDS, COURSES_FIELDS_DETAILED } from "./fragments";

//useful
export const GET_COURSE_BY_ID = gql`
  ${COURSES_FIELDS_DETAILED}
  query getCourseById($id: ID!) {
    Course(where: { id: $id }) {
      ...CoursesFieldsDetailed
    }
  }
`;

export const GET_FIRST_LEVEL_COURSES_BY_CATEGORY = gql`
  ${COURSES_FIELDS}
  query getFirstLevelCoursesByCategory($category: CourseCategoryType!) {
    allCourses(
      where: { category: $category, father_is_null: true }
      sortBy: order_ASC
    ) {
      ...CoursesFields
    }
  }
`;

export const GET_COURSES_COUNT = gql`
  query getCoursesCount {
    _allCoursesMeta {
      count
    }
  }
`;

export const GET_MINIMAL_COURSES_COUNT = gql`
  query getMinimalCoursesCount {
    _allCoursesMeta(where: { children_none: { father_is_null: false } }) {
      count
    }
  }
`;

export const GET_MINIMAL_CATEGORY_COURSES_COUNT = gql`
  query getMiniMalCoursesCount($category: CourseCategoryType!) {
    _allCoursesMeta(
      where: { children_none: { father_is_null: false }, category: $category }
    ) {
      count
    }
  }
`;
