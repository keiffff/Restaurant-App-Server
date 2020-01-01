import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    message: String!
  }
`

export default typeDefs;
