import { gql } from "@apollo/client";

export const UPDATE_ME_MUTATION = gql`
  mutation UpdateMe($input: UpdateMeInput!) {
    updateMe(input: $input) {
      user {
        id
        firstName
        lastName
        phone
        role
        email
      }
      message
    }
  }
`;
