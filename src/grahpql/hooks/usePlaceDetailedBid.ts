import { useMutation } from "@apollo/client";
import {
  PlaceDetailedBidDocument,
  PlaceDetailedBidMutation,
  PlaceDetailedBidMutationVariables,
} from "@/__generated__/graphql";

export function usePlaceDetailedBid() {
  const [mutate, { loading, error, data }] = useMutation<
    PlaceDetailedBidMutation,
    PlaceDetailedBidMutationVariables
  >(PlaceDetailedBidDocument);

  const placeBid = (quoteId: string, input: any) => {
    return mutate({
      variables: {
        quoteId,
        input,
      },
    });
  };

  return {
    placeBid,
    loading,
    error,
    data,
  };
}
