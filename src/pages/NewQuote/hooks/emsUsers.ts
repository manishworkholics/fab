import { useQuery } from '@apollo/client';
import { GetAllUsersDocument } from '@/__generated__/graphql';
import { UserRole, Ems } from '@/__generated__/graphql';

function useEMSUsers() {
  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GetAllUsersDocument);
  console.log("Data from useEMSUsers:", data);
  const emsUsers = data && data.users?.filter((user) => user?.role === UserRole.Ems)
    .map((user) => {
      return user;
    }) as Ems[];
    
  return {
    emsUsers,
    isLoading,
    isError,
  };
}

export default useEMSUsers;
