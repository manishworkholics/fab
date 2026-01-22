import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const ACCEPT_BID = gql`
  mutation AcceptQuoteBid($bidId: String!) {
    acceptQuoteBid(bidId: $bidId)
  }
`;

export const useAcceptQuoteBid = () => {
  const [mutate, { loading }] = useMutation(ACCEPT_BID);

  const acceptBid = (bidId: string) => {
    return mutate({ variables: { bidId } });
  };

  return { acceptBid, loading };
};
