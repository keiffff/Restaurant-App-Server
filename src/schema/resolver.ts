import { Resolvers } from '../types/graphql';
import { DataSources } from '../datasources';
import { ResponseGetRestaurantsApi } from '../dataSources/models/restaurantApi';

const resolvers: Resolvers = {
  Query: {
    restaurants: async (_, { input }, { dataSources }: { dataSources: DataSources }) => {
      const response: ResponseGetRestaurantsApi = await dataSources.restaurantApi.getRestaurants(
        input ?? { freeword: '' },
      );

      return {
        totalCount: response.total_hit_count,
        perPage: response.hit_per_page,
        currentPage: response.page_offset,
        restaurants: response.rest.map(({ id, name, image_url, opentime, access, budget }) => ({
          id,
          name,
          budget,
          image: image_url.shop_image1,
          openTime: opentime,
          nearStation: access.station,
        })),
      };
    },
  },
};

export default resolvers;
