import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://petgram-server-max-seven.vercel.app/graphql",
  cache: new InMemoryCache(),
});

export const ApolloComponent = ({children})=>{
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
