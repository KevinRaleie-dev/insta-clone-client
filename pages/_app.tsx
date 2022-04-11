import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { createApolloClient } from '../client';
import '../styles/globals.css';




function MyApp({ Component, pageProps }: AppProps) {

  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
