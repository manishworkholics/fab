import { useQuery } from "@apollo/client";
import { MyFavoriteQuotesDocument } from "@/__generated__/graphql";

export const useMyFavoriteQuotes = () => {
  const { data, loading, error, refetch } = useQuery(MyFavoriteQuotesDocument);

  return {
    favorites: data?.myFavoriteQuotes || [],
    loading,
    error,
    refetch,
  };
};
