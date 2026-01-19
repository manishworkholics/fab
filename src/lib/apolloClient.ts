import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { getAccessToken } from "./getAccessToken";
import { setContext } from "@apollo/client/link/context";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: getAccessToken() || "",
  },
});

// const apolloClient = new ApolloClient({
// 	uri: import.meta.env.VITE_API_URL,
// 	cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

// Middleware to add the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
