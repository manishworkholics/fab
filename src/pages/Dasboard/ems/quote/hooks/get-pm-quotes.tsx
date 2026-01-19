import { useQuery } from "@apollo/client";
import useFilter from "@/utils/hooks/useFilter";
import { GetQuotesDocument } from "@/__generated__/graphql";

const defaultFilters = {
  limit: 10,
  page: 1,
  search: "",
  sortBy: "createdAt",
  sortOrder: "desc",
  filters: {},
};

function usePmQuotes() {
  const { filters, applyFilters } = useFilter(defaultFilters);

  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GetQuotesDocument, {
    variables: {
      params: {
        search: filters.search,
        sortBy: filters.sortBy,
        sortOrder: filters.sortOrder,
        page: filters.page,
        limit: filters.limit,
        filters: filters.filters,
      },
    },
    fetchPolicy: "no-cache",
  });

  return {
    quotes: data?.quotes?.quotes || [],
    totalCount: data?.quotes.totalCount || 0,
    isLoading,
    filters,
    isError,
    applyFilters,
  };
}

export default usePmQuotes;
