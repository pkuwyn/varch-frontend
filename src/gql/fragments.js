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

export const QUESTION_FIELDS = gql`
  fragment QuestionFields on Question {
    id
    name
    content
    answer
    explanation
    a
    b
    c
    d
    order
    questionImage {
      path
      publicUrl
    }
  }
`;

export const VTOURS_FIELDS_DETAILED = gql`
  ${QUESTION_FIELDS}
  fragment VtoursFieldsDetailed on Vtour {
    id
    name
    summary
    url
    tourType
    learningTime
    order
    tourImage {
      path
      publicUrl
    }
    questions {
      ...QuestionFields
    }
    content
  }
`;

export const VTOURS_FIELDS = gql`
  fragment VtoursFields on Vtour {
    id
    name
    url
    summary
    tourType
    learningTime
    order
    tourImage {
      path
      publicUrl
    }
  }
`;
