import { useQuery } from "@apollo/client";
import { DetailedBidsForQuoteDocument } from "@/__generated__/graphql";

export const useQuoteBids = (quoteId: string) => {
  const { data, loading, error, refetch } = useQuery(
    DetailedBidsForQuoteDocument,
    {
      variables: { quoteId },
      skip: !quoteId,
    }
  );

  return {
    bids: data?.detailedBidsForQuote || [],
    loading,
    error,
    refetch,
  };
};
