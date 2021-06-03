import { gql } from "@apollo/client";
import { USERS_FIELDS } from "./fragments";

//Acount Mutations
export const LOGIN = gql`
  ${USERS_FIELDS}
  mutation login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        ...UsersFields
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    unauthenticateUser {
      success
    }
  }
`;

export const SIGNUP = gql`
  ${USERS_FIELDS}
  mutation signup($email: String!, $password: String!) {
    createUser(data: { email: $email, password: $password }) {
      ...UsersFields
    }
  }
`;

export const SEND_VERIFY_CODE = gql`
  mutation sendVCode($email: String!, $type: EmailType!) {
    sendVerifyCode(email: $email, type: $type) {
      success
      message
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation verifyEmail($email: String!, $vCode: String!) {
    verifyEmail(email: $email, vCode: $vCode) {
      success
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $email: String!
    $vCode: String!
    $newPassword: String!
  ) {
    resetPassword(email: $email, vCode: $vCode, newPassword: $newPassword) {
      success
      message
    }
  }
`;
