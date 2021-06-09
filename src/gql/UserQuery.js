import { gql } from "@apollo/client";

import { USERS_FIELDS } from "./fragments";

export const CURRENT_USER = gql`
  ${USERS_FIELDS}
  query getCurrentUser {
    authenticatedUser {
      ...UsersFields
    }
  }
`;
