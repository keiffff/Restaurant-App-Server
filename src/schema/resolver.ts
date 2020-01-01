import { Resolvers } from '../types/graphql';
import { DataSources } from '../datasources';
import { ResponseGetRestaurantsApi } from '../dataSources/models/restaurantApi';

const resolvers: Resolvers = {
  Query: {
    restaurants: async (_, { freeword }, { dataSources }: { dataSources: DataSources }) => {
      const response: ResponseGetRestaurantsApi = await dataSources.restaurantApi.getRestaurantsByFreeword(
        freeword ? freeword : '',
      );

      return response.rest.map(({ id, name, image_url }) => ({ id, name, image: image_url.shop_image1 }));
    },
  },
};

export default resolvers;
