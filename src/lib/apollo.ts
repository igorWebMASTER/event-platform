import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odeocw1zc401xibb42bvhr/master',
    cache: new InMemoryCache()
})