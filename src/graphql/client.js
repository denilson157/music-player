import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient(
    {
        uri: 'https://learning-ewe-45.hasura.app/v1/graphql',
        headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': 'ZMuSTmIHJK4i20My6CkPbPugDzEuCfyfxDk4Ue2BIocRs64DmRatq669NkjolUjW',
        },
        cache: new InMemoryCache()
    }
);

export default client