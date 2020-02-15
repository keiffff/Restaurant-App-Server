import { Resolvers } from '../types/graphql';

const resolvers: Resolvers = {
  Query: {
    restaurants: async (_, { input }, { dataSources }) =>
      await dataSources.restaurantApi.getRestaurants(input ?? { freeword: '' }),
  },
};

export default resolvers;
