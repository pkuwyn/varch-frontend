import { gql } from "@apollo/client";

import { VTOURS_FIELDS_DETAILED, VTOURS_FIELDS } from "./fragments";

export const GET_VTOURS = gql`
  ${VTOURS_FIELDS}
  query getAllVtours {
    allVtours(sortBy: order_ASC) {
      ...VtoursFields
    }
  }
`;

export const GET_VTOUR_BY_ID = gql`
  ${VTOURS_FIELDS_DETAILED}
  query getVtourById($id: ID!) {
    Vtour(where: { id: $id }) {
      ...VtoursFieldsDetailed
    }
  }
`;

export const GET_LONGEST_VTOUR = gql`
  query getLongestVtour {
    allVtours(sortBy: learningTime_DESC, first: 1) {
      learningTime
    }
  }
`;
