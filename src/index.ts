import { ApolloServer } from "apollo-server"
import { dataSources } from './dataSources';
import schema from './schema';

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    restaurantApi: dataSources.restaurantApi
  }),
  introspection: true,
  playground: true
});

const port = process.env.PORT || 4000;

(async () => {
  const serverInfo = await server.listen(port);
  console.log(`🚀  Server ready at ${serverInfo.url}`);
})();
