import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_GQL_URI,
  credentials: "include",
  headers: {},
});

export default client;
