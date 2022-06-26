import { ApolloProvider } from '@apollo/client';
import React from 'react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Router } from './Route';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter >
        <Router />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

