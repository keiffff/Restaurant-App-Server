import { gql } from 'apollo-server';

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    image: String!
  }

  type Query {
    restaurants(freeword: String): [Restaurant!]!
  }
`;

export default typeDefs;
