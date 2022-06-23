import { ApolloProvider } from '@apollo/client';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Router } from './Route';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter />
      <Router />
    </ApolloProvider>
  )
}

export default App

