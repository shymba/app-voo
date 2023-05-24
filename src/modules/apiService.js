export default class ApiService {

    _apiBase = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12'

    async getCardsInfo() {
        const response = await fetch(this._apiBase).then((res) => res.json())
        // console.log(response.products);
        return response.products
    }

}
