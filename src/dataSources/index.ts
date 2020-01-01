import RestaurantAPI from './restaurantApi';

export type DataSources = {
  restaurantApi: RestaurantAPI;
};

export const dataSources = {
  restaurantApi: new RestaurantAPI(),
};
