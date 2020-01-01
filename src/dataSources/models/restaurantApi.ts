export type Restaurant = {
  id: string;
  update_date: Date;
  name: string;
  name_kana: string;
  latitude: number;
  longitude: number;
  category: string;
  url: string;
  url_mobile: string;
  coupon_url: { pc: string; mobile: string };
  image_url: { shop_image1: string; shop_image2: string; qrcode: string };
  address: string;
  tel: string;
  tel_sub: string;
  fax: string;
  opentime: string;
  holiday: string;
  access: { line: string; station: string; station_exit: string; walk: number; note: string };
  parking_lots: number;
  pr: { pr_short: string; pr_long: string };
  code: {
    areacode: string;
    areaname: string;
    prefcode: string;
    prefname: string;
    areacode_s: string;
    category_code_l: string;
    category_name_l: string;
    category_code_s: string;
    category_name_s: string;
  };
  budget: number;
  party: number;
  lunch: number;
  credit_card: string;
  e_money: string;
  flags: { mobile_site: number; mobile_coupon: number; pc_coupon: number };
};

export type ResponseGetRestaurantsApi = {
  total_hit_count: number;
  hit_per_page: number;
  page_offset: number;
  rest: Restaurant[];
};
