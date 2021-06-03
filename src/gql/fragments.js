import { gql } from "@apollo/client";

export const COURSES_FIELDS = gql`
  fragment CoursesFields on Course {
    id
    name
    summary
    category
    learningTime
    isMinimal
    coverImage {
      publicUrl
    }
    father {
      name
    }
    children {
      name
    }
  }
`;

export const USERS_FIELDS = gql`
  fragment UsersFields on User {
    id
    name
    email
    isAdmin
    password_is_set
    verified
    coursesFinished {
      id
    }
    vtoursFinished {
      id
    }
  }
`;
