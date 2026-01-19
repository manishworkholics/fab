import { useQuery } from "@apollo/client";
import { GET_ALL_EMS } from "@/grahpql/queries/ems";

export function useEMS() {
  const { data, loading, error } = useQuery(GET_ALL_EMS);

  return {
    emsList: data?.getAllEMS || [],
    loading,
    error,
  };
}
