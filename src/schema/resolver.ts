import { Resolvers } from '../types/graphql';

const resolvers: Resolvers = {
  Query: {
    restaurants: async (_, { input }, { dataSources }) => {
      const response = await dataSources.restaurantApi.getRestaurants(input ?? { freeword: '' });

      return {
        restaurants: response.rest.map(({ id, name, image_url, opentime, access, lunch, budget }) => ({
          id,
          name,
          lunch: lunch ? lunch : null,
          budget: budget ? budget : null,
          image: image_url.shop_image1,
          openTime: opentime,
          nearStation: access.station,
        })),
        pageInfo: {
          totalCount: response.total_hit_count,
          perPage: response.hit_per_page,
          currentPage: response.page_offset,
        },
      };
    },
  },
};

export default resolvers;
