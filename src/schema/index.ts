import { makeExecutableSchema, IResolvers } from "graphql-tools";
import typeDefs from "./typeDefs";
import resolvers from "./resolver";

export default makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as IResolvers
});
