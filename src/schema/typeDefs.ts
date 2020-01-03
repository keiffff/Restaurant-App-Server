import { gql } from 'apollo-server';

const typeDefs = gql`
  type PageInfo {
    totalCount: Int!
    perPage: Int!
    currentPage: Int!
  }

  type Restaurant {
    id: ID!
    name: String!
    image: String!
    openTime: String!
    nearStation: String!
    lunch: Int
    budget: Int
  }

  input FilterInput {
    offsetPage: Int
    latitude: Float
    longitude: Float
    range: Int
    freeword: String
    lunch: Int
    bottomLessCup: Int
    buffet: Int
    privateRoom: Int
    webReserve: Int
  }

  type GetRestaurantsResponse {
    restaurants: [Restaurant!]!
    pageInfo: PageInfo!
  }

  type Query {
    restaurants(input: FilterInput): GetRestaurantsResponse!
  }
`;

export default typeDefs;
