import { createHttpLink, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../store";


export function createApolloClient() {
    let authToken: string | null

    const link = new HttpLink({
        uri: "http://localhost:4000/graphql",
    })

    const authLink = setContext((_, { headers }) => {
    
        
        if (typeof window !== "undefined") {
            authToken = getToken('token');
        }
    
        return {
            headers: {
            ...headers,
            authorization: authToken ? `Bearer ${authToken}` : ''
            }
        }  
    });
    
    const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include'
    })
    
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(link),
        ssrMode: typeof window === 'undefined',
        credentials: 'include'
    });

    return client;
}
