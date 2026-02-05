import { gql } from "@apollo/client";

export const GET_EMS_REVIEWS = gql`
  query GetEMSReviews($emsId: Int!) {
    emsReviews(emsId: $emsId) {
      rating
      comment
      reviewerName
      createdAt
    }
  }
`;
