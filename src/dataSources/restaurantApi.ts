import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { FilterInput } from '../types/graphql';

class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
  }

  public willSendRequest(request: RequestOptions) {
    request.params.set('keyid', process.env.GNAVI_API_ACCESS_KEYID as string);
  }

  public async getRestaurants(input: FilterInput) {
    return this.get('/', {
      ...(input.name ? { name: input.name } : {}),
      ...(input.latitude ? { latitude: input.latitude } : {}),
      ...(input.longitude ? { longitude: input.longitude } : {}),
      ...(input.range ? { range: input.range } : {}),
      ...(input.currentPage ? { offset_page: input.currentPage } : {}),
      freeword: input.freeword ?? '',
      ...(input.lunch ? { lunch: input.lunch } : {}),
      ...(input.bottomLessCup ? { bottomless_cup: input.bottomLessCup } : {}),
      ...(input.buffet ? { buffet: input.buffet } : {}),
      ...(input.parivateRoom ? { private_room: input.parivateRoom } : {}),
      ...(input.webReserve ? { web_reserve: input.webReserve } : {}),
    });
  }
}

export default RestaurantAPI;
