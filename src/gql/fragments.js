import { gql } from "@apollo/client";

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
      publicUrl
    }
  }
`;

export const COURSES_FIELDS = gql`
  fragment CoursesFields on Course {
    id
    name
    summary
    category
    learningTime
    isMinimal
    order
    coverImage {
      publicUrl
    }
    father {
      id
    }
    children {
      id
    }
  }
`;

export const COURSES_FIELDS_DETAILED = gql`
  ${COURSES_FIELDS}
  ${QUESTION_FIELDS}
  fragment CoursesFieldsDetailed on Course {
    id
    name
    summary
    category
    learningTime
    isMinimal
    content
    questions {
      ...QuestionFields
    }
    coverImage {
      publicUrl
    }
    father {
      id
    }
    children(sortBy: order_ASC) {
      ...CoursesFields
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
      isMinimal
      category
    }
    vtoursFinished {
      id
    }
    unityFinished
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
      publicUrl
    }
  }
`;
