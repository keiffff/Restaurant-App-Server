import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { FilterInput, GetRestaurantsResponse } from '../types/graphql';
import { ResponseGetRestaurantsApi } from './models/restaurantApi';

class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
  }

  public willSendRequest(request: RequestOptions) {
    request.params.set('keyid', process.env.GNAVI_API_ACCESS_KEYID || '');
  }

  public async getRestaurants(input: FilterInput) {
    const response = await this.get<ResponseGetRestaurantsApi>('/', {
      freeword: input.freeword ?? '',
      ...(input.latitude ? { latitude: input.latitude } : {}),
      ...(input.longitude ? { longitude: input.longitude } : {}),
      ...(input.range ? { range: input.range } : {}),
      ...(input.offsetPage ? { offset_page: input.offsetPage } : {}),
      ...(input.lunch ? { lunch: input.lunch } : {}),
      ...(input.bottomLessCup ? { bottomless_cup: input.bottomLessCup } : {}),
      ...(input.buffet ? { buffet: input.buffet } : {}),
      ...(input.privateRoom ? { private_room: input.privateRoom } : {}),
      ...(input.webReserve ? { web_reserve: input.webReserve } : {}),
    });

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
  }
}

export default RestaurantAPI;
