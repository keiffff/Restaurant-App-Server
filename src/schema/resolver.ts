import { Resolvers, Restaurant } from '../types/graphql';
import { DataSources } from "../datasources";

const resolvers: Resolvers = {
  Query: {
    restaurants: async (_, { freeword }, { dataSources }: { dataSources: DataSources} ) => {
      const response = await dataSources.restaurantApi.getRestaurantsByFreeword(freeword ? freeword : '');

      return response.rest.map(({ id, name, image_url }: { id: string, name: string, image_url: { shop_image1: string, shop_image2: string, qrcode: string } }) => ({ id, name, image: image_url.shop_image1 }))
    }
  },
};

export default resolvers;
