import { useQuery } from "@apollo/client";
import { MyBidsDocument } from "@/__generated__/graphql";

export const useMyBids = () => {
  const { data, loading, error, refetch } = useQuery(MyBidsDocument);

  return {
    bids: data?.myBids || [],
    loading,
    error,
    refetch,
  };
};
