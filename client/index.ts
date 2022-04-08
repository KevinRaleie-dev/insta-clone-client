import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../store";

const authLink = setContext((_, { headers }) => {
const token = getToken('token');
return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : ''
    }
}  
});

const httpLink = createHttpLink({
uri: 'http://localhost:4000/graphql'
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    ssrMode: typeof window === 'undefined'
});