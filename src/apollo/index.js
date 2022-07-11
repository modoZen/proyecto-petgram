import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: "https://petgram-server-max-seven.vercel.app/graphql",
})

const authLink = setContext((_,{ headers})=>{
  const token = sessionStorage.getItem('token');
  return {
    headers:{
      ...headers,
      authorization: token?`Bearer ${token}`:''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloComponent = ({children})=>{
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
