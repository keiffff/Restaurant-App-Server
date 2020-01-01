import { ApolloServer } from "apollo-server";
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    message: String!
  }
`

const resolvers = {
  Query: {
    message: () => 'Hello, World'
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

const port = process.env.PORT || 4000;

(async () => {
  const serverInfo = await server.listen(port);
  console.log(`🚀  Server ready at ${serverInfo.url}`);
})();
