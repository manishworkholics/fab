import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// const apolloClient = new ApolloClient({
// 	uri: import.meta.env.VITE_API_URL,
// 	cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_API_URL,
  });

// Middleware to add the Authorization header
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("accessToken");  
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
	  },
	};
  });


  const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),  
	cache: new InMemoryCache(),
  });

export default apolloClient;
