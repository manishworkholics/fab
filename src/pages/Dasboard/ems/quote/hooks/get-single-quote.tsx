import { useQuery } from "@apollo/client";
import { GetQuoteDocument } from "@/__generated__/graphql";

function useSingleQuote(quoteId: string) {

  const {
    data,
    loading: isLoading,
    error: isError,
      } = useQuery(GetQuoteDocument, {
    variables: {
      quoteId: quoteId,
    },
    fetchPolicy: "no-cache",
  });

  return {
    quote: data?.quote,
    isLoading,
    isError,
  };
}

export default useSingleQuote;
