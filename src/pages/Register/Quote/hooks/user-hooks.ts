import { useQuery } from '@apollo/client';
import { GetAllUsersDocument } from '@/__generated__/graphql';

function useUsers() {
	const {
		data: user,
		loading: isLoading,
		error: isError,
	} = useQuery(GetAllUsersDocument);

	return {
		user,
		isLoading,
		isError,
	};
}

export default useUsers;
