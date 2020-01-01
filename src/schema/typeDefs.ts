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

  input FilterInput {
    currentPage: Int
    name: String
    latitude: Float
    longitude: Float
    range: Int
    freeword: String
    lunch: Int
    bottomLessCup: Int
    buffet: Int
    parivateRoom: Int
    webReserve: Int
  }

  type GetRestaurantsResponse {
    totalCount: Int!
    perPage: Int!
    currentPage: Int!
    restaurants: [Restaurant!]!
  }

  type Query {
    restaurants(input: FilterInput): GetRestaurantsResponse
  }
`;

export default typeDefs;
