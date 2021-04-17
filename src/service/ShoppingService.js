import Axios from 'axios';

export default class ShoppingService {
  static async getFeature () {
    const { data } = await Axios.get("https://node.wingeat.com/test-api/features");
    return data;
  }
  static async getList (pageNumber) {
    const { data } = await Axios.get(`https://node.wingeat.com/test-api/items?page=${pageNumber}`);
    return data;
  }
}