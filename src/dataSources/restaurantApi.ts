import { RESTDataSource } from "apollo-datasource-rest";

class RestaurantAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${process.env.GNAVI_API_ACCESS_KEYID}/`
  }

  public async getRestaurantsByFreeword(freeword: string) {
    console.log(this.baseURL);

    return this.get(`&freeword=${freeword}`);
  }
}

export default RestaurantAPI;
