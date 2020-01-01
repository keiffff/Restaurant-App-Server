import { gql } from 'apollo-server';

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    image: String!
    openTime: String!
    nearStation: String!
    budget: Int!
  }

  type GetRestaurantsResponse {
    totalCount: Int!
    perPage: Int!
    currentPage: Int!
    restaurants: [Restaurant!]!
  }

  type Query {
    restaurants(freeword: String = ""): GetRestaurantsResponse
  }
`;

export default typeDefs;
